// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 *
 * 
 */
// const maxProfit = (prices) => {
//   let profit = 0
//   for (let buyIndex = 0; buyIndex < prices.length; buyIndex++) {
//     let temp = 0
//     for (let soldIndex = buyIndex + 1; soldIndex < prices.length; soldIndex++) {
//       temp = prices[soldIndex] - prices[buyIndex]
//       if (temp > profit) {
//         profit = temp
//       }
//     }
//   }
//   console.log('end:' + profit)
//   return profit
// };
const maxProfit = (pricesList) => {
  let p = new Array(pricesList.length + 1).fill().map(() => new Array(2).fill().map(() => new Array(2))) // 三维数组 [天数][交易次数][持仓状态]    [d][k][s]

  // 交易次数为一次，[天数][交易次数][持仓状态]    [d][0 or 1][s]
  // bottom up
  p[0][0][0] = 0;
  p[0][0][1] = 0;
  p[0][1][0] = 0;
  p[0][1][1] = -pricesList[0];
  for (let day = 1; day < p.length; day++) {
    for (let times = 0; times < p[day].length; times++) {
      for (let state = 0; state < p[day][times].length; state++) {
        if (state === 0 && times > 0) {
          p[day][times][state] = Math.max(
            p[day - 1][times][0],
            p[day - 1][times][1] + pricesList[day - 1] // p[days]的长度比prices[] 多 1 
          ); // 交易次数在买入时扣除
        } else if (state === 1 && times > 0) {
          p[day][times][state] = Math.max(
            p[day - 1][times][1],
            p[day - 1][times - 1][0] - pricesList[day - 1]
          );
        } else if (times == 0 && state == 0){
          p[day][times][state] = 0
        } else if (times == 0 && state > 0){
          p[day][times][state] = 0;
        }
      }
    }
  }

  return p[pricesList.length][1][0];
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))


