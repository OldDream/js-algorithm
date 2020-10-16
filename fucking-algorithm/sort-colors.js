/**
 * https://leetcode-cn.com/problems/sort-colors/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  sort(nums, 0, nums.length - 1);

  function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  /**
   *
   * @param {*} numberArr 数字数组
   * @param {*} left 左侧index
   * @param {*} right 右侧index
   */
  function sort(numberArr, left, right) {
    console.log('sort:' + left + ',' + right);
    console.log(numberArr);
    const cutterNum = numberArr[left];
    let leftPointer = left + 1;
    let rightPointer = right;
    while (leftPointer < rightPointer) {
      while (numberArr[leftPointer] < cutterNum && leftPointer < rightPointer) {
        leftPointer++;
      }
      while (
        numberArr[rightPointer] > cutterNum &&
        rightPointer > leftPointer
      ) {
        rightPointer--;
      }
      if (leftPointer < rightPointer) {
        swap(numberArr, leftPointer++, rightPointer--);
      }
    }
    if (numberArr[leftPointer] < cutterNum) {
      swap(numberArr, left, leftPointer);
      // 切分点小于切分数
    } else {
      // 切分点大于等于切分数，则选择其左边的数，必定小于切分点。
      swap(numberArr, left, --leftPointer);
    }
    console.log(leftPointer + ',' + rightPointer);
    if (
      left < leftPointer
    ) {
      console.log(1)
      sort(numberArr, left, leftPointer - 1);
    }
    if (
      leftPointer < right 
    ) {
      console.log(2)
      sort(numberArr, leftPointer + 1, right);
    }
  }
};

const arr = [0,2,1]
sortColors(arr)
console.log(arr)