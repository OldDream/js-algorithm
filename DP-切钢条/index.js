// 线性模型
// 题目： https://zhuanlan.zhihu.com/p/70763958

const priceArr = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]   // index 为长度， 对应的值为价格

// bottom up 自底向上

/**
 * 
 * 获取改长度切割后可得的最高价格，只能得到最高价格，不知道具体怎么切
 * @param {number} length 钢条长度 
 */
function getBestPrice(barLength) {
  if (barLength > priceArr.length - 1) {
    throw 'too long'
  }
  const baetProfitArr = new Array(barLength + 1) // 不同长度钢条的最佳收益，index为长度
  baetProfitArr[0] = { value: 0 } // 长度为0的钢条，价格为0

  // 自底向上，从0开始，填充 baetProfitArr 数组
  for (let i = 0; i <= barLength; i++) {
    let bestProfit = Number.MIN_SAFE_INTEGER // 给一个最小值，保证小于任何切法的收益，能给负无穷最好
    // 计算长度为 i 的钢条的最佳收益，j 为从 i 中切除的长度
    for (let j = 0; j < i; j++) {
      bestProfit = Math.max(bestProfit, priceArr[j] + priceArr[i - j])
    }
    baetProfitArr[i] = { value: bestProfit }
  }
  return baetProfitArr[barLength]
}

// console.log(getBestPrice(9))

/**
 * 
 * 获取改长度切割后可得的最高价格，以及切割方案。
 * @param {number} length 钢条长度 
 */
function getBestPriceAndSolution(barLength) {
  if (barLength > priceArr.length - 1) {
    throw 'too long'
  }
  const baetProfitArr = new Array(barLength + 1) // 不同长度钢条的最佳收益，index为长度
  baetProfitArr[0] = { value: 0 } // 长度为0的钢条，价格为0

  function printBestCluPoint(length) {
    console.log('total length: ' + length)
    console.log('cut point: ' + baetProfitArr[length].bestCutPoint)
    let leftSide = baetProfitArr[length].bestCutPoint
    let rightSide = length - baetProfitArr[length].bestCutPoint
    if (leftSide > 0 && leftSide != length) {
      printBestCluPoint(leftSide)
    }
    if (rightSide > 0 && rightSide != length) {
      printBestCluPoint(rightSide)
    }
  }

  // 自底向下，从0开始，填充 baetProfitArr 数组
  for (let i = 0; i <= barLength; i++) {
    let bestProfit = Number.MIN_SAFE_INTEGER // 给一个最小值，保证小于任何切法的收益，能给负无穷最好
    let bestCutPoint = null
    // 计算长度为 i 的钢条的最佳收益，j 为从 i 中切除的长度
    for (let j = 0; j < i; j++) {
      if (priceArr[j] + priceArr[i - j] >= bestProfit) {
        bestProfit = priceArr[j] + priceArr[i - j]
        bestCutPoint = i - j // 最佳切割点长度
      }
    }
    baetProfitArr[i] = { value: bestProfit, bestCutPoint }
  }
  printBestCluPoint(barLength)
  return baetProfitArr[barLength]
}

console.log(getBestPriceAndSolution(9))
