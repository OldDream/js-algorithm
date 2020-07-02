/**
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
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
      } else if (index1 +1 >= m && element1 < element2) {
        nums1[m] = element2
        m++
        break
      }
    }
  }
};

const arr1 = [0]
merge(arr1, 0, [1], 1)
console.log(arr1)