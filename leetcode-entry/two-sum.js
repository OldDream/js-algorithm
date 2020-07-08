/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 复杂度O(n^2)
  for (let index1 = 0; index1 < nums.length; index1++) {
    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      if (nums[index1] + nums[index2] === target) {
        return [index1, index2]
      }
    }
  }
};
var twoSum = function (nums, target) {
  // 两遍循环，利用hash表，复杂度O(n)
  const hashMap = new Map()
  for (let index1 = 0; index1 < nums.length; index1++) {
    hashMap.set(nums[index1], index1)
  }
  for (let index1 = 0; index1 < nums.length; index1++) {
    let targetIndex = hashMap.get(target - nums[index1])
    if (targetIndex !== undefined && targetIndex !== index1) {
      return [index1, targetIndex]
    }
  }
};
var twoSum = function (nums, target) {
  // 1遍循环，利用hash表，复杂度O(n)，其实插入hash表的时候查一下就ok，都是成对出现的。
  const hashMap = new Map()
  for (let index1 = 0; index1 < nums.length; index1++) {
    let targetIndex = hashMap.get(target - nums[index1])
    if (targetIndex !== undefined && targetIndex !== index1) {
      return [index1, targetIndex]
    }
    hashMap.set(nums[index1], index1)
  }
};