/**
 * @param {number[]} nums
 * @return {number}
 * 第一版
 */
var removeDuplicates1 = function (nums) {
  let tempArr = []
  let tempNum = null
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (tempNum !== element) {
      tempNum = element
      tempArr.push(tempNum)
    }
  }
  tempArr.forEach((val,index)=> {
    nums[index] = val
  })
  return tempArr.length
};


/**
 * @param {number[]} nums
 * @return {number}
 * 第二版，优化时间复杂度&空间复杂度
 */
var removeDuplicates2 = function (nums) {
  let length = 0
  let tempNum = null
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (tempNum !== element) {
      tempNum = element
      nums[length++] = element
    }
  }
  
  return length
};

/**
 * @param {number[]} nums
 * @return {number}
 * 第3版，省个变量
 */
var removeDuplicates2 = function (nums) {
  let leftIndex = 0
  const length = nums.length
  for (let index = 1; index < length; index++) {
    const element = nums[index];
    if (nums[leftIndex] !== element) {
      nums[++leftIndex] = element
    }
  }
  
  return leftIndex + 1
};
