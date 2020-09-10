/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp_index_2 = 0,
    dp_index_1 = 0,
    dp_index = 0
  for (let index = nums.length - 1; index >= 0; index--) {
    const num = nums[index];
    dp_index = Math.max(dp_index_2 + num, dp_index_1)
    dp_index_2 = dp_index_1
    dp_index_1 = dp_index
  }
  return dp_index
};
