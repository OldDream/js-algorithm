//  heap sort，适用于数据量不定时。
// 其实是优先队列 priority queue 的一种实现，数组转换为优先队列（支持插入元素和删除最大元素？本题只需要支持插入元素）后，就有序了，也就能拿到制定位置的数值了。
// 1、小顶堆，限制大小为 length - k + 1，则，遍历数组添加节点，结束后，堆中最大的值为所求的值。
// 2、小顶堆，限制大小为 k，大小到达k后，每次放入一个，就得从堆顶删除一个，最终得到一个大小为k的堆，堆顶即为所求
// 3、大顶堆，遍历整个数组构造二叉树，构造结束后，从从顶上删除 k-1 个节点，顶部元素即为所求。

/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 * https://github.com/labuladong/fucking-algorithm/blob/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%8F%89%E5%A0%86%E8%AF%A6%E8%A7%A3%E5%AE%9E%E7%8E%B0%E4%BC%98%E5%85%88%E7%BA%A7%E9%98%9F%E5%88%97.md
 * 分别使用 quick sort 的 变种 quick select 和 heap sort 解决
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  let pq = new priorityQueue(nums.length)
  nums.forEach(element => {
    pq.add(element)
  });

  for (let index = 1; index < k; index++) {
    pq.delTop()
  }

  return pq.top()
};

/**
 * 优先级队列，使用大顶堆实现
 */
class priorityQueue {
  constructor(size) {
    this.heap = new Array(size + 1).fill(null) // 下标为0的地方空出,这样父子节点乘2除2的时候就不会出现0*2=0这种bug情况,后面多留一位，用于熔炼大道上限时临时使用
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
      if (this.right(index) < this.currentSize && this.heap[maxIndex] < this.heap[this.right(index)]) {
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
    return this.currentSize < this.heap.length - 1
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
    if (this.isFull()) {
      // 未满
      this.currentSize++
      this.heap[this.currentSize] = val
      this.swim(this.currentSize)
    } else {
      // 已满
      if (val > this.top()) {
        let targetIndex = this.getMinIndex()
        this.heap[targetIndex] = val
        this.swim(targetIndex)
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

console.log(findKthLargest([3,2,1,5,6,4], 2))