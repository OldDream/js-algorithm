/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = []
  for (let row = 0; row < numRows; row++) {
    result.push(new Array(row + 1))
    for (let col = 0; col < row + 1; col++) {
      const rowArr = result[row]
      if (col === 0 || col === row) { // 处理每行首位
        rowArr[col] = 1
      } else {
        // 处理中间部位
        const val1 = result[row - 1][col - 1]
        const val2 = result[row - 1][col]
        if (val2 === undefined) {
          rowArr[col] = val1
        } else {
          rowArr[col] = val1 + val2
        }
      }
    }
  }
  return result
};