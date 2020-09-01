/**
 * 这是不限制交易次数的
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 最优子结构： 前一次卖出、买入后对应的利润
  // base case f[0][0] = 0,没交易利润为0，只能低买高卖，不能倒过来。不能倒亏。
  // 状态： 是否持有股票 0空仓 或 1持有
  // 选择：导致「状态」产生变化的行为，买卖
  // 明确dp表意义：某一天，某种持有状态下，所拥有的利润。
  // 状态转移方程：dp[天][持有] = MAX（dp[天 - 1][持有]，dp[天 - 1][空仓] - 今日买入价格）
  // 状态转移方程：dp[天][0] = MAX（dp[天 - 1][0]，dp[天 - 1][1] + 今日出售价格）
  const dp = [[0, Number.NEGATIVE_INFINITY]] // 后面的新数据，往里面push即可,一天一次交易，从第二天开始见效
  prices.forEach((price, day) => {
    const profit = []
    // 空仓状态
    profit.push(Math.max(dp[day + 1 - 1][0], dp[day + 1 - 1][1] + price))
    // 持有状态
    profit.push(Math.max(dp[day + 1 - 1][1], dp[day + 1 - 1][0] - price))
    dp.push(profit)
  });
  console.log(dp)
  return dp[prices.length][0]
};