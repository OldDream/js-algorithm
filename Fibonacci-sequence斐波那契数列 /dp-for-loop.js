// 动态规划就是：将原问题拆解成若干子问题，同时保存子问题的答案，使得每个子问题只求解一次，最终获得原问题的答案。

const length = 10 // 长度
const result = new Array(length)
for (let index = 0; index < length; index++) {
  if (index === 0 || index === 1) {
    result[index] = 1
  } else {
    result[index] = result[index - 1] + result[index - 2]
  }
}

console.log(result.toString(','))