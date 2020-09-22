/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // dp[目标价] = 最小硬币数量
  const dp = new Array(amount + 1).fill(amount + 1); // 初始值给大
  dp[0] = 0;
  for (let index = 0; index < dp.length; index++) {
    // 检查当前输入价格能否被凑出来
    for (const coin of coins) {
      if (index - coin < 0) {
        continue; // 排除目标价格小于面值的情况
      } else {
        dp[index] = Math.min(dp[index - coin] + 1, dp[index]); // 对比得出用最少硬币的方案
      }
    }
  }
  console.log(dp);
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
