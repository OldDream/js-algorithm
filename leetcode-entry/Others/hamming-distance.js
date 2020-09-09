/**
 * https://leetcode-cn.com/problems/hamming-distance/
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let different = 0
  const xBinaryStr = [...x.toString(2).padStart(32,0)]
  const yBinaryStr = [...y.toString(2).padStart(32,0)]
  for (let index = 0; index < 32; index++) {
    if (xBinaryStr[index] !== yBinaryStr[index]) {
      different++
    }
  }
  return different
};