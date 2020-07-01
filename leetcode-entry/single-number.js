/**
 * @param {number[]} nums
 * @return {number}
 *  可使用异或运算 
 *  任何数和 0 做异或运算，结果仍然是原来的数，
 *  任何数和其自身做异或运算，结果是 0，
 *  异或运算满足交换律和结合律
 */

const singleNumber = (nums) => {
  let onlyOne = 0
  for (const num of nums) {
    onlyOne = onlyOne ^ num
  }
  return onlyOne
};