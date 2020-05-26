/**
 *  创建真实数据结构
 */

var line = 5 // 杨辉三角的行数
var triangleArr = new Array(line)

// 创建对应数据结构
for (let index = 0; index < line; index++) {
  triangleArr[index] = new Array(index + 1)
}

// 填充对应数据
for (let layer = 0; layer < line; layer++) {
  var currentLayer = triangleArr[layer]
  for (let index = 0; index < currentLayer.length; index++) {
    if (index == 0 || index == currentLayer.length - 1) {
      currentLayer[index] = 1
    } else {
      currentLayer[index] = triangleArr[layer - 1][index - 1] + triangleArr[layer - 1][index]
    }
  }
}

// 打印
for (let layer = 0; layer < line; layer++) {
  var currentLayer = triangleArr[layer]
  console.log(currentLayer.toString(','))
}