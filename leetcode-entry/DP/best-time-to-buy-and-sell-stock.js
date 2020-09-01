/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.POSITIVE_INFINITY
  let maxProfit = 0
  prices.forEach((price) => {
    let tempProfit 
    if (price < minPrice) {
      minPrice = price
    } else if (maxProfit < (tempProfit = price - minPrice)) {
      maxProfit = tempProfit
    }
  });
  return maxProfit
};

