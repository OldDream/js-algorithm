
/**
 * index 处的转轮向上拨一位
 * @param {*} str 
 * @param {*} index 
 */
function plusOne(str, index) {
  const strArr = [...str]
  let char = strArr[index]
  if (char === '9') {
    char = '0'
  } else {
    char = 1 + Number(char) + ''
  }
  strArr[index] = char
  return strArr.join('')
}

/**
 * index 处的转轮向下拨一位
 * @param {*} str 
 * @param {*} index 
 */
function minusOne(str, index) {
  const strArr = [...str]
  let char = strArr[index]
  if (char === '0') {
    char = '9'
  } else {
    char = Number(char) - 1 + ''
  }
  strArr[index] = char
  return strArr.join('')
}

/**
 * https://leetcode-cn.com/problems/open-the-lock/
 * 需要逐 节点 生成和父节点相关的8个节点
 * 已访问过的节点不再生成、死亡节点不再生成
 * 直到访问到 target ，
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let visited = ['0000', ...deadends]
  let queue = ['0000']
  let step = 0
  while (queue.length > 0) {
    let layerSize = queue.length
    step++
    console.log(step)
    while (layerSize > 0) {
      const tempNode = queue.slice()
      layerSize--
      for (let index = 0; index < 4; index++) {
        const up = plusOne(tempNode, index)
        const down = minusOne(tempNode, index)
        if (target === up || target === down) {
          return step
        }
        if (!visited.includes(up)) {
          visited.push(up)
        }
        if (!visited.includes(down)) {
          visited.push(down)
        }
      }
    }
  }
  return -1
};

