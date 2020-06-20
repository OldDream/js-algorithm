// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 价格只受时间变量影响，单变量，所以可以用贪婪算法解决。
 * 
 */
const maxProfit = (prices) => {
  let profit = 0
  for (let buyIndex = 0, soldIndex = 1; buyIndex < prices.length; soldIndex++) {
    
  }

  return profit
};

maxProfit([7,1,5,3,6,4])

