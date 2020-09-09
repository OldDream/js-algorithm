/**
 * https://leetcode-cn.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const hashMap = new Map()
  // 在 hashmap 中记录
  for (const item of nums) {
    hashMap.set(item, true)
  }

  for (let index = 0; index <= nums.length; index++) {
    if (!hashMap.has(index)) {
      return index
    }
  }
  return -1
};