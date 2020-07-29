//  heap sort，适用于数据量不定时。
// 其实是优先队列 priority queue 的一种实现，数组转换为优先队列（支持插入元素和删除最大元素？本题只需要支持插入元素）后，就有序了，也就能拿到制定位置的数值了。
// 1、小顶堆，限制大小为 length - k + 1，则，遍历数组添加节点，结束后，堆中最大的值为所求的值。
// 2、小顶堆，限制大小为 k，大小到达k后，每次放入一个，就得从堆顶删除一个，最终得到一个大小为k的堆，堆顶即为所求
// 3、大顶堆，遍历整个数组构造二叉树，构造结束后，从从顶上删除 k-1 个节点，顶部元素即为所求。

/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 * https://github.com/sisterAn/JavaScript-Algorithms/issues/60
 * 分别使用 quick sort 的 变种 quick select 和 heap sort 解决
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  // 采用小顶堆，则堆大小为 k，先构建尺寸为k的堆，后如果后来的数值大于 堆顶， 则换掉顶 + 重新堆化
  // 采用从后往前的堆化方式
  let heap = ['']
  for (let index = 0; index < k; index++) {
    heap.push(nums[index])
  }

  buildHeap(heap) // 先将数组堆化
  for (let index = k; index < nums.length; index++) {
    const currentNum = nums[index];
    if (currentNum > heap[1]) { // 把大的往堆里塞
      heap[1] = currentNum
      buildHeap(heap) // 每次换顶，都要重新遍历整个堆，效率其实不高
    }
  }

  return heap[1]
};

// 原地建堆
function buildHeap(items, heapSize =1) {
  while(heapSize < items.length - 1) {
      heapSize ++
      heapify(items, heapSize)
  }
}

function heapify(items, i) {
  // 自下而上式堆化
  while (Math.floor(i/2) > 0 && items[i] < items[Math.floor(i/2)]) {  
      swap(items, i, Math.floor(i/2)); // 交换 
      i = Math.floor(i/2); 
  }
}  

/**
   * 交换
   */
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))