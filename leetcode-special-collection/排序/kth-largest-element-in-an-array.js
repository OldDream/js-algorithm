// 先实现quick sort 算法4th P182  ok，切分--保证左右。
// 再实现 变种 quick select，适用于数据量确定时。

/**
 * 交换数组中i、j两下标对应字符
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * 随机切分并以切分点排序，返回切分点
 */
const randomPartition = (arr, left, right) => {
  const bkr = right, bkl = left
  let axis = left + Math.floor(Math.random() * (right - left))
  let val = arr[axis]
  swap(arr, axis, bkl)
  while (true) {
    while (arr[left] <= val && left < bkr) {
      left++
    }
    while (arr[right] >= val && right > bkl) {
      right--
    }
    if (left >= right) {
      break;
    } else {
      swap(arr, left, right)
    }
  }
  swap(arr, bkl, right)
  return right
}

let findKthLargest = function (nums, k) {
  k = nums.length - k;
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let axis = randomPartition(nums, left, right)
    if (axis == k) {
      break
    } else if (axis < k) {
      left = axis + 1 // axis对应数值在数组中的位置是正确的，不会改变，没必要参与排序
    } else {
      right = axis - 1
    }
  }
  return nums[k]
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))


/**
 * 分别使用 quick sort 的 变种 quick select 和 heap sort 解决
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {

// };

// heap sort 算法4th P195，适用于数据量不定时

