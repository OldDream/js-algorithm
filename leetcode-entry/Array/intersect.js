/**
 * 两数组取交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  let isFirstLonger = nums1.length > nums2.length // 挑选出较长的数组
  const shorterHashMap = new Map()
  let mapTarget = isFirstLonger ? nums2 : nums1
  let loopTarget = isFirstLonger ? nums1 : nums2
  const resultArr = []
  // 创建较短数组的hashMpa，key为数组内容，value为出现次数
  for (let index = 0; index < mapTarget.length; index++) {
    const key = mapTarget[index]
    const val = shorterHashMap.get(key)
    if (!val) {
      shorterHashMap.set(key, 1)
    } else {
      shorterHashMap.set(key, val + 1)
    }
  }
  // 从长数组中筛选出重复项目
  for (let index = 0; index < loopTarget.length; index++) {
    const key = loopTarget[index];
    const val = shorterHashMap.get(key)
    if (val > 0) {
      resultArr.push(key)
      shorterHashMap.set(key, val - 1)
    }
  }
  return resultArr
};