/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  // 需要两个指针 firstZeroIndex lastZeroIndex
  // 未遇到0的时候向右移动指针
  // 遇到0的时候，若下一个不是0，则将向右移动
  // 若下一个是0，则指针firstZeroIndex指向最右侧的0，lastZeroIndex指向最左侧的0
  const limit = nums.length - 1
  let firstZeroIndex = 0, lastZeroIndex = 0
  while (nums[lastZeroIndex] !== 0 && lastZeroIndex < limit) {
    lastZeroIndex++
  }
  firstZeroIndex = lastZeroIndex
  if (nums[firstZeroIndex] !== 0) return

  for (; firstZeroIndex < limit;) {
    while (nums[firstZeroIndex + 1] === 0) {
      firstZeroIndex++ // 若有连续0，移动指针到最右的0
    }
    if (firstZeroIndex + 1 < nums.length) {
      firstZeroIndex++
      nums[lastZeroIndex] = nums[firstZeroIndex]
      nums[firstZeroIndex] = 0
      lastZeroIndex++
    }
  }
};

/**
 * 大佬解法
 * @param {*} nums 
 */
const moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i <= nums.length -1; i ++) {
    if (nums[i] !== 0 ) {
      nums[j] = nums[i];
      if( i !== j) {
        nums[i] = 0;
      }
      j ++
    }
  }
};

const nums = [4, 0, 0, 3, 0, 0, 5, 1, 0]
moveZeroes(nums)
console.log(nums)