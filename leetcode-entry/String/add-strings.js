/**
 * https://leetcode-cn.com/problems/add-strings/submissions/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  num1 = [...num1]
  num2 = [...num2]
  const select = num1.length - num2.length
  const prefix = new Array(Math.abs(select)).fill('0')
  // 凑成相同长度
  if (select > 0) {
    num2 = prefix.concat(num2)
  } else {
    num1 = prefix.concat(num1)
  }
  let addOneInNext = false // 下一位加1
  let result = []
  // 循环相加
  for (let index = num1.length - 1; index >= 0; index--) {
    const element1 = num1[index];
    const element2 = num2[index];
    let tempSumStr = Number(element1) + Number(element2) + Number(addOneInNext) + ''
    if (tempSumStr.length > 1) {
      result.push(tempSumStr.slice(1))
      addOneInNext = true
    } else {
      result.push(tempSumStr)
      addOneInNext = false
    }
  }
  if (addOneInNext) {
    result.push('1')
  }
  return result.reverse().join('')
};

addStrings('9', '99')
