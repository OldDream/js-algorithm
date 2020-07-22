/**
 * https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/description/
 * 
 * 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。
 * 如果答案不止一个，返回 长度最长 且 字典顺序最小 的字符串。
 * 如果答案不存在，则返回空字符串。
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 * 
 * 
 * 通过删除字符串 s 中的一个字符能得到字符串 t，可以认为 t 是 s 的子序列，我们可以使用双指针来判断一个字符串是否为另一个字符串的子序列。
 * 
 */
let findLongestWord = function (s, d) {
  /**
   * 判断两字符串是否为父子关系
   * @param {String} fa 
   * @param {String} son 
   */
  const isSubstr = (fa, son) => {
    fa = [...fa]
    son = [...son]
    let faIndex = 0,
      sonIndex = 0
    while (faIndex < fa.length) {
      if (fa[faIndex] === son[sonIndex]) {
        faIndex++
        sonIndex++
      } else {
        faIndex++
      }
    }
    return sonIndex === son.length  // 最后会有一次多余的加
  }

  let resultStr = ""
  d.forEach(son => {
    if (isSubstr(s, son)) {
      if (resultStr.length < son.length) {
        resultStr = son
      } else if(resultStr.length === son.length && resultStr > son) {
        resultStr = son
      }
    }
  });

  return resultStr
}; 