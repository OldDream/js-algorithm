/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const hashMap = new Map()
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (hashMap.get(element)) {
      return true
    } else {
      hashMap.set(element,true)
    }
  }
  return false
};