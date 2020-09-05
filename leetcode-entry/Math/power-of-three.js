/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1 || 1 < n && n < 3) {
    return false
  } else if (n === 1) {
    return true
  } else {
    return isPowerOfThree(n / 3)
  }
};