/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 初始化最短长度
  let minLenght = Number.POSITIVE_INFINITY
  for (const iterator of strs) {
    if (iterator.length < minLenght) minLenght = iterator.length
  }
  if (minLenght ===  Number.POSITIVE_INFINITY) {
    return ''
  }
  let commonPrefix = ''
  for (let index = 0; index < minLenght; index++) {
    let charAtIndex = strs[0][index]
    // 若有不相同的则终止程序
    for (const str of strs) {
      if (str[index] !== charAtIndex) {
        return commonPrefix
      }
    }
    commonPrefix += charAtIndex
  }
  return commonPrefix
};

console.log(longestCommonPrefix([]))