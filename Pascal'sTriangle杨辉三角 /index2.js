/**
 * 不创建数据结构，直接使用组合数公式C(n,m)打印
 * 第n行的数据，相当于 (a + b)^(n-1) 的系数
 * https://zhuanlan.zhihu.com/p/26725382
 */

var line = 5 // 杨辉三角的行数

/**
 * 从 n 个不同元素中取出 m 个的组合数
 *
 * @param {*} n 不同元素总数
 * @param {*} m 取出的元素
 */
function combination_number_formula(n, m) {
  return factorial_recursion(n) / (factorial_recursion(m) * factorial_recursion(n - m))
}

function factorial_recursion(n) {
  if (n <= 1) return 1;

  return n * factorial_recursion(n - 1)
}

for (let layer = 0; layer < line; layer++) {
  var lineLength = layer + 1 // 每行的长度
  var tempStr= ''
  for (let index = 0; index < lineLength; index++) {
    // 每行从C(n,0) 到 C(n,n)
    tempStr = tempStr + (combination_number_formula(layer, index)) + ',' 
  }
  console.log(tempStr)
  tempStr = ''
}
