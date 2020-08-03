/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 初始化最短长度
  let lenghtLimit = 0
  if (strs[0]) {
    lenghtLimit = strs[0].length
  } else {
    return ''
  }

  let commonPrefix = ''
  for (let index = 0; index < lenghtLimit; index++) {
    let charAtIndex = strs[0][index]
    // 若有不相同的则终止程序
    for (const str of strs) {
      if (str[index] === undefined || str[index] !== charAtIndex) {
        return commonPrefix
      }
    }
    commonPrefix += charAtIndex
  }
  return commonPrefix
};

console.log(longestCommonPrefix([]))