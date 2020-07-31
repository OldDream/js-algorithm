// https://leetcode-cn.com/problems/reverse-integer/
/**
 * 使用现成api
 * @param {number} x
 * @return {number}
 */
const Max = Math.pow(2, 31)
const Min = -Max
var reverse = function (x) {
  let temp = [...String(x)].reverse().join('')
  if (x < 0) {
    temp = temp.substring(0, temp.length - 1)
  }
  temp = Number(temp)
  if (temp > Max || temp < Min) {
    return 0
  } else {
    if (x < 0) {
      return -temp
    } else {
      return temp
    }
  }
};

// 手动翻转字符串
var reverse = function (x) {
  let res = '';
  let str = x + ''
  if (x > 0) {
    for (var i = str.length - 1; i >= 0; i--) {
      res += str[i]
    }
  } else {
    for (var i = str.length - 1; i > 0; i--) {
      res = res + str[i]
    }
    res = -res
  }

  if (res < Math.pow(-2, 31) || res >= Math.pow(2, 31) - 1) {
    return 0
  }
  return res * 1
};

console.log(reverse(-123))