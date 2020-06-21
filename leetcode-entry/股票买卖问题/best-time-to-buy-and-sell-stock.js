// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 *
 * 
 */
const maxProfit = (prices) => {
  let profit = 0
  for (let buyIndex = 0; buyIndex < prices.length; buyIndex++) {
    let temp = 0
    for (let soldIndex = buyIndex + 1; soldIndex < prices.length; soldIndex++) {
      temp = prices[soldIndex] - prices[buyIndex]
      if (temp > profit) {
        profit = temp
      }
    }
  }
  console.log('end:' + profit)
  return profit
};


maxProfit([7,1,5,3,6,4])

