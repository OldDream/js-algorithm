/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.backUp = nums.concat([])
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.backUp
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const temp = this.backUp.slice()
  for (let index = 0; index < temp.length; index++) {
    const randomIndex = getRandom(index, temp.length - 1)
    swap(index, randomIndex, temp)
  }
  return temp
};

function swap(i, j, arr) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function getRandom(i, j) {
  const delta = j - i
  const result = Math.floor(Math.random() * (delta + 1)) + i
  return result
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */