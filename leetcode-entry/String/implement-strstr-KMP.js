/**
 * https://leetcode-cn.com/problems/implement-strstr/solution/kmp-suan-fa-xiang-jie-by-labuladong/
 * KMP法
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = (haystack, needle) => {
  let dp = null // 二维dp表dp[j][c] = next
  // 0 <= j < M，代表当前的状态
  // 0 <= c < 256，代表遇到的字符（ASCII 码）
  // 0 <= next <= M，代表下一个状态

  // 创建dp表
  const createKMPTable = () => {
    dp = new Array(needle.length + 1).fill(0).map(()=> {return new Array(128).fill(0)}) 
    const M = needle.length
    dp[0][needle.charCodeAt(0)] = 1
    let X = 0 // 影子状态
    for (let i = 1; i < M; i++) { // 表的长度 === M-1，表中最大值 === M
      const charCodeAtI = needle.charCodeAt(i)
      for (let j = 0; j < 128; j++) {
        if (j === charCodeAtI) {
          dp[i][j] = i + 1
        } else {
          dp[i][j] = dp[X][j]
        }
      }
      X = dp[X][charCodeAtI] // 更新影子状态---在有最长公共前缀的情况下，遇到当前输入的字符，状态应该去哪里？---解决了这个问题
                              // 即 新遇到的字符无法是状态机更进一步，需要回退，判断回退的目的地
    }
  }


  /**
   * 使用dp表驱动搜索
   */
  const search = () => {
    const M = needle.length // 子串长度
    const N = haystack.length // 被搜索字符串的长度
    if (M === N && N === 0) return 0
    if (M === 0) return 0
    let j = 0 // 匹配状态机的状态
    for (let index = 0; index < N; index++) {
      j = dp[j][haystack.charCodeAt(index)]
      if (j === M) {
        return index - M + 1
      }
    }
    return -1
  }

  createKMPTable()
  return search()
};

// KMP 算法

console.log(strStr("hello", 'll'))