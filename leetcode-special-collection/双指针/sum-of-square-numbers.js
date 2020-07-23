/**
 * https://leetcode-cn.com/problems/sum-of-square-numbers/
 * @param {number} c
 * @return {boolean}
 */
let judgeSquareSum = function (c) {
  let leftNum = 0,
    rightNum = Math.ceil(Math.sqrt(c))
  while (leftNum <= rightNum) {
    let sum = Math.pow(rightNum, 2) + Math.pow(leftNum, 2)
    if (sum > c) {
      rightNum--
    } else if (sum < c) {
      leftNum++
    } else {
      return true
    }
  }
  return false
};