// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 价格只受时间变量影响，单变量，所以可以用贪婪算法解决。
 * 
 */
const maxProfit = (pricesList) => {
  let p = new Array(pricesList.length + 1).fill().map(() => new Array(2)); // 三维数组 [天数][交易次数][持仓状态]    [d][k][s]

  // 交易次数为无限，则状态方程中无需保存状态，可简化为 [天数][持仓状态]    [d][s]
  // bottom up
  p[0][0] = 0;
  p[0][1] = Number.NEGATIVE_INFINITY;
  for (let day = 1; day < p.length; day++) {
    const profitArr = p[day];
    for (let state = 0; state < profitArr.length; state++) {
      if (state === 0) {
        p[day][state] = Math.max(
          p[day -1][0],
          p[day - 1][1] + pricesList[day - 1]
        );
      } else {
        p[day][state] = Math.max(
          p[day - 1][1],
          p[day - 1][0] - pricesList[day - 1]
        );
      }
    }
  }

  return p[pricesList.length][0];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));