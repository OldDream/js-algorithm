/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  let result = 0 // 计算结果
  let isUnderZero = false   // 是否小于0
  let leftPointer = 0 // 左边的指针
  const numReg = /\d/
  const whiteSpaceReg = /\s/
  const MAX = Math.pow(2, 31) - 1
  const MIN = Math.pow(-2, 31)
  str = str.trim() // 去除首尾空白符
  str = Array.from(str)
  if (str[0] !== '-' && str[0] !== '+' && !numReg.test(str[0])) {
    // 开头不符合要求
    return result
  }
  if (str[0] === '-') {
    // 是负数
    isUnderZero = true
    leftPointer++
  } else if (str[0] === '+') {
    leftPointer++
  }
  let currentNum = Number(str[leftPointer])
  while (!whiteSpaceReg.test(str[leftPointer]) && !Number.isNaN(currentNum)) {
    // 当对应位能转成数字时
    result = result * 10 + currentNum
    leftPointer++
    currentNum = Number(str[leftPointer])
  }
  if (isUnderZero) {
    result = -result
  }
  if (result > MAX) {
    return MAX
  } else if (result < MIN) {
    return MIN
  }
  return result
};

console.log(myAtoi("+1"))