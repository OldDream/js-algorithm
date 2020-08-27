/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  // 最优子结构，爬 1，2，3...台阶时所需时间
  // base case f(0) = 1, f(1) = 1
  // 状态： 阶梯数 n
  // 选择：导致「状态」产生变化的行为，选步长 1 or 2
  // 明确dp表意义：走 n 步的方法。
  // 状态转移方程：f(n) = f(n-2) + f(n-1)
  let dpTable = new Array(n + 1)
  dpTable[0] = 1
  dpTable[1] = 1
  if (n < 2) return dpTable[n]

  for (let num = 2; num <= n; num++) {
    let result = dpTable[num - 2] + dpTable[num - 1]
    dpTable[num]= result
  }

  return dpTable[n]
};
