/**
 * 递归解决
 * https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  const createRes = preStr => {
    preStr = [...preStr]
    if (n == 1) return '1'
    let m = 1
    let res = ''
    for (let i = 0; i < preStr.length; i++) {
      if (preStr[i] !== preStr[i + 1]) {
        res += m + preStr[i]
        m = 1
      } else {
        m++
      }
    }
    n--
    return n === 1 ? res : createRes(res)
  }
  let result = createRes('1')
  return result
};

console.log(countAndSay('6'))