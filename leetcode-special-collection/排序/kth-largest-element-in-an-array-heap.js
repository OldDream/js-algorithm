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
  // 采用小顶堆，则堆大小为 k，先构建尺寸为k的堆，后如果后来的数值大于 堆顶， 则换掉顶 + 重新堆化
  
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  
};


console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))