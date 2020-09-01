/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 最优子结构，长度1、2、3... 时，最大子数组的值
  // base case f(0) = 0
  // 状态：输入数组长度 n
  // 选择：长度 +1 时，新加入的数是单独技术 or 加入原有数组，才能取得最大值
  // 状态转移方程：f(n) = max（f(n-1) + nums[n] , nums[n]）
  // 明确dp表意义：输入数组长为 n 时，最大子数组之和，！！注意，这边有限制，最后一个数一定会影响dp表的值，但是最终的答案未必需要最后的这个数（取中间一段作为子数组也是可以的）。
  // 所以，在建立dp表后，需要遍历dp表，获取最大子序和，代码中用 maxNum 解决了这个问题。

  const dp = [0]
  let maxNum = nums[0]
  nums.forEach((num, index) => {
    let max = Math.max(dp[index] + num, num)
    if (max > maxNum) maxNum = max
    // console.log('num: ' + num)
    // console.log('max: ' + max)
    dp.push(max)
  })
  return maxNum
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])