/**
 * 滑动窗口法,复杂度O(mn)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = (haystack, needle) => {
  if (haystack == needle) {
    return 0
  }
  if (needle.length === 0) {
    return 0
  }
  haystack = Array.from(haystack)
  needle = Array.from(needle)
  for (let index = 0; index < haystack.length - needle.length + 1;) {
    let result = index
    for (let index2 = 0; index2 < needle.length;) {
      if (haystack[index] === needle[index2]) {
        index2++
        index++
        if (index2 === needle.length) {
          return result
        }
      } else {
        index = result + 1
        break
      }
    }
  }
  return -1
};

// KMP 算法

console.log(strStr("mississippi", 'issip'))