// https://leetcode-cn.com/problems/valid-palindrome/
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

/**
 * 
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  const charReg = /[a-z]|[0-9]/ // 用于排除符号的正则
  let leftPointer = 0  // 左侧指针
  let rightPointer = s.length - 1 // 右侧指针
  s = s.toLowerCase()
  s = Array.from(s)     // 提升查找性能
  while (leftPointer < rightPointer) {
    // 先检查字符合法性
    while (!charReg.test(s[leftPointer])) {
      leftPointer++
    }
    while (!charReg.test(s[rightPointer])) {
      rightPointer--
    }
    if (s[leftPointer] != s[rightPointer]) {
      return false
    } else {
      leftPointer++
      rightPointer--
    }
  }
  return true
};

let isPalindrome = function (s) {
  const charReg = /[a-z]|[0-9]/ // 用于排除符号的正则
  s = s.toLowerCase()
  s = Array.from(s)     // 提升查找性能
  s = s.filter(char => charReg.test(char))
  let leftPointer = 0  // 左侧指针
  let rightPointer = s.length - 1 // 右侧指针
  while (leftPointer < rightPointer) {
    // 先检查字符合法性
    // while (!charReg.test(s[leftPointer])) {
    //   leftPointer++
    // }
    // while (!charReg.test(s[rightPointer])) {
    //   rightPointer--
    // }
    if (s[leftPointer] != s[rightPointer]) {
      return false
    } else {
      leftPointer++
      rightPointer--
    }
  }
  return true
};