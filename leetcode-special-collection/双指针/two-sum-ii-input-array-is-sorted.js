/**
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 * https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E5%8F%8C%E6%8C%87%E9%92%88.md
 * 
 * @param {number[]} numbers 从小到大的有序数组
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let leftPointer = 0,
    rightPointer = numbers.length - 1
  while (leftPointer < rightPointer) {
    let sum = numbers[leftPointer] + numbers[rightPointer]
    if (sum === target) {
      return [leftPointer +1, rightPointer +1]
    } else if (sum > target) {
      // 大了
      rightPointer--
    } else {
      leftPointer++
    }
  }
  return []
};