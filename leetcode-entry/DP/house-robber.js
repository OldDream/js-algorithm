/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 0) {
    return 0
  }
  const dp = []
  dp.push(nums[0])
  dp.push(Math.max(nums[0], nums[1]))
  for (let index = 2; index < nums.length; index++) {
    const num = nums[index];
    let tempProfit = Math.max(dp[index - 2] + num, dp[index - 1])
    dp.push(tempProfit)
  }
  return dp[nums.length - 1]
};