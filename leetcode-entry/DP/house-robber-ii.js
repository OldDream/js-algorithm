var _rob = function (nums, left, right) {
  let dp_index_2 = 0,
    dp_index_1 = 0,
    dp_index = 0
  for (let index = right; index >= left; index--) {
    const num = nums[index];
    dp_index = Math.max(dp_index_2 + num, dp_index_1)
    dp_index_2 = dp_index_1
    dp_index_1 = dp_index
  }
  return dp_index
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // 三种情况，首尾两家都不抢，抢头不抢尾，抢尾不抢头，第一种排除，不抢肯定钱少啊。在后两种间比较。
  return Math.max(_rob(nums, 0, nums.length - 2), _rob(nums, 1, nums.length - 1))
};