/**
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge1 = function (nums1, m, nums2, n) {
  // 插入排序实现
  for (let index2 = 0; index2 < nums2.length; index2++) {
    const element2 = nums2[index2];
    for (let index1 = 0; index1 < nums1.length; index1++) {
      const element1 = nums1[index1];
      if (element1 >= element2) {
        // 在index1插入，后面的全部右移
        let temp = element1
        for (let index3 = index1; index3 < nums1.length - 1; index3++) {
          let current = nums1[index3 + 1]
          nums1[index3 + 1] = temp
          temp = current
        }
        nums1[index1] = element2
        m++
        break
      } else if (index1 + 1 >= m && element1 < element2) {
        nums1[m] = element2
        m++
        break
      }
    }
  }
};

const merge = function (nums1, m, nums2, n) {
  // 从后往前
  let len0 = m + n - 1, // len0 指向数组1末尾
    len1 = m - 1, // len1从m开始减小，指向数组1正在替换的部位
    len2 = n - 1 // len2从n开始减小，指向数组2正在替换的部位
  while (len1 >= 0 && len2 >= 0) {
    nums1[len0--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
  }

  if (len2 >= 0) {
    //  拼接num2剩余部分到num1头部
    for (let index = 0; index <= len2; index++) {
      nums1[index ] = nums2[index]
    }
  }
};




const arr1 = [4,0,0,0]
merge(arr1, 1, [2,5,6], 3)
console.log(arr1)