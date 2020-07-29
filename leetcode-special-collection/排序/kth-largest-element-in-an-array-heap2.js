/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 * https://github.com/labuladong/fucking-algorithm/blob/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%8F%89%E5%A0%86%E8%AF%A6%E8%A7%A3%E5%AE%9E%E7%8E%B0%E4%BC%98%E5%85%88%E7%BA%A7%E9%98%9F%E5%88%97.md
 * 分别使用 quick sort 的 变种 quick select 和 heap sort 解决
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  // 使用定长的 优先队列。
  let pq = new priorityQueue(nums.length -k + 1)
  nums.forEach(element => {
    pq.add(element)
  });

  return pq.top()
};

/**
 * 优先级队列，使用大顶堆实现
 */
class priorityQueue {
  constructor(size) {
    this.heap = new Array(size + 1).fill(null) // 下标为0的地方空出,这样父子节点乘2除2的时候就不会出现0*2=0这种bug情况
    this.currentSize = 0
  }

  /**
   * 上浮元素
   */
  swim(index) {
    // 非位于堆顶 且 大于父节点
    while (index > 1 && this.heap[index] > this.heap[this.parent(index)]) {
      this.exch(index, this.parent(index))
      index = this.parent(index)
    }
  }

  /**
   * 下沉元素
   */
  sink(index) {
    while (this.left(index) <= this.currentSize) {
      let maxIndex = this.left(index)// 先假设左边节点较大
      // 如果右边节点存在，比一下大小
      if (this.right(index) <= this.currentSize && this.heap[maxIndex] < this.heap[this.right(index)]) {
        maxIndex = this.right(index)
      }
      if (this.heap[index] > this.heap[maxIndex]) {
        break;
      } else {
        this.exch(index, maxIndex)
        index = maxIndex
      }
    }
  }


  /**
   * 获取父节点坐标
   * @param {Number} index 
   */
  parent(index) {
    return Math.floor(index / 2)
  }

  /**
   * 获取左子节点坐标
   * @param {Number} index 
   */
  left(index) {
    return index * 2
  }

  /**
   * 获取右子节点坐标
   * @param {Number} index 
   */
  right(index) {
    return index * 2 + 1
  }


  /**
   * 是否已满
   */
  isFull() {
    return !(this.currentSize < this.heap.length - 1)
  }

  /**
   * 删除堆顶的元素
   */
  delTop() {
    this.exch(1, this.currentSize)
    this.heap[this.currentSize] = null
    this.currentSize--
    this.sink(1)
  }

  /**
   * 往堆中添加数据
   */
  add(val) {
    if (!this.isFull()) {
      // 未满
      this.currentSize++
      this.heap[this.currentSize] = val
      this.swim(this.currentSize)
    } else {
      // 已满
      if (val < this.top()) { // 把小的往堆里放，保证整个堆中包含了数组从小到大排序后从[0]到 [heap.length - 2] 的数。
        this.heap[1] = val
        this.sink(1)
      }
    }
  }

  top() {
    return this.heap[1]
  }

  getMinIndex() {
    let min = this.heap[Math.min(this.currentSize / 2)];
    let minIndex = Math.min(this.currentSize / 2)
    for (let index = Math.min(this.currentSize / 2) + 1; index <= this.currentSize; index++) {
      if (this.heap[index] <= min) {
        min = this.heap[index]
        minIndex = index
      }
    }
    return minIndex
  }

  /**
   * 交换堆中元素
   */
  exch(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

console.log(findKthLargest([7,6,5,4,3,2,1], 5))