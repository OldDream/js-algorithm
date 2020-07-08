/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  // 两次翻转：先转置，后每一列都镜像到另一侧
  // 转置 transform
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = rowIndex; colIndex < matrix[rowIndex].length; colIndex++) {
      let temp = matrix[rowIndex][colIndex]
      matrix[rowIndex][colIndex] = matrix[colIndex][rowIndex]
      matrix[colIndex][rowIndex] = temp
    }
  }
  // 镜像翻转,i行 j列
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length / 2; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix[i].length - j - 1]
      matrix[i][matrix[i].length - j - 1] = temp
    }
  }
};

let twoDArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(twoDArr)
rotate(twoDArr)
console.log(twoDArr)