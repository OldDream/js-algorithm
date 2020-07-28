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
  let axisVal = arr[axis]
  swap(arr, axis, bkl) // 将 axisVal 保存在最左边
  left++
  while (true) {
    while (arr[left] <= axisVal && left < bkr) {
      left++
    }
    while (arr[right] >= axisVal && right > bkl) {
      right--
    }
    if (left >= right) {
      console.log('axisVal:' + axisVal)
      console.log('left:' + left) // left 停下时，要不走到头，要不遇到了大于 axisVal 的数
      console.log('right:' + right) // right 停下时，要不走到头，要不遇到了小于 axisVal 的数，注意此时停下有两种情况：
      // case 1、left 和 right 交汇于一点 left === right
      // case 2、left 指向一个大于 axisVal 的数， right 指向一个 小于 axisVal的数，此时  left > right
      // 根据以上两种情况，最后要进行一次 swap(arr, bkl, right)，把 axisVal 和 right 指向的数互换.
      // 在 case1 中，和axisVal可与 arr[left] 或 arr[right] 互换， case2 中，只能与 arr[right] 互换, 因此选择写 swap(arr, bkl, right)

      console.log(arr)
      break;
    } else {
      swap(arr, left, right)
    }
  }
  swap(arr, bkl, right)  // 这个很重要，必须和右边的指针交换。为什么不能和左边的指针交换？ 看上面的注释
  return right // 返回 axisVal 所在的下标
}

let findKthLargest = function (nums, k) {
  k = nums.length - k;
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let axis = randomPartition(nums, left, right)
    if (axis == k) {
      break // axis 对应的位置正好是倒数第 k 位
    } else if (axis < k) {
      left = axis + 1 // axis对应数值在数组中的位置是正确的，不会改变，没必要参与排序
    } else {
      right = axis - 1  // 同上
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

