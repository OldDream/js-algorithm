// 暴力法
// const rotate = (nums, k) => {
//   // 循环替换
//   for (let step = 0; step < k; step++) {
//     // 数组么个元素都往前移动一位
//     let temp = null
//     let previous = nums[nums.length - 1]
//     for (let index = 0; index < nums.length; index++) {
//       temp = nums[index]
//       nums[index] = previous
//       previous = temp
//     }
//   }
// };

// 环状替换
const rotate = (nums, k) => {
  // 将 k > 数组长度 的情况处理一下，此时相当于移动 k % n 次
  k = k % nums.length
  let moveTimes = 0 // 移动次数
  for (let start = 0; moveTimes < nums.length; start++) {
    let current = start // 当前处理项目的下标
    let prev = nums[current] // 保存被覆盖掉的变量
    let next, temp
    do {
      next = (current + k) % nums.length // 移动目标位下标
      temp = nums[next] // 备份目标处将被覆盖的数据
      nums[next] = prev // 移动数据到目标处
      prev = temp // 将被覆盖的数据保存，供下次循环使用
      current = next // 将坐标移动到 + k 的位置
      moveTimes++ // 记录移动次数，无论次序，移动n次后，整个数组就完成移动
    } while (current !== start)
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7]
rotate(arr, 3)
console.log(arr.toString())