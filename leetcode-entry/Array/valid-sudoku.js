/**
 * 
 * https://zh.wikipedia.org/wiki/%E6%95%B8%E7%8D%A8#%E8%A6%8F%E5%89%87
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 输入确定为 9 x 9 矩阵
  const rowHashMap = {} // 行判断  
  const colHashMap = {} // 列判断
  const gongHashMap = {} // 每一宫判断
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = Number(board[r][c])
      if (Number.isNaN(val)) {
        continue;
      };
      // 判断行重复
      if (rowHashMap[`${r}-${val}`]) {
        return false
      } else {
        rowHashMap[`${r}-${val}`] = true
      }
      // 判断列重复
      if (colHashMap[`${c}-${val}`]) {
        return false
      } else {
        colHashMap[`${c}-${val}`] = true
      }
      // 判断某一宫重复
      const i = parseInt(r / 3)
      const j = parseInt(c / 3)
      if (gongHashMap[`${i}-${j}-${val}`]) {
        return false
      } else {
        gongHashMap[`${i}-${j}-${val}`] = true
      }
    }
  }
  return true
};

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))