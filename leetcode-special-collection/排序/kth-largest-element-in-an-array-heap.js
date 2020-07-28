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
  
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))