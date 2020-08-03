const generateStr = (str) => {
  let result = ''
  const strArr = [...str]
  let stack = []
  for (let index = 0; index < strArr.length; index++) {
    let current = strArr[index]
    if (stack.length === 0) {
      stack.push(current)
      continue;
    }
    let lastInStack = stack[stack.length - 1]
    if (lastInStack === current) {
      stack.push(current)
    } else {
      result += stack.length + lastInStack
      stack = []
      stack.push(current)
    }
  }

  if (stack.length > 0) {
    let lastInStack = stack[stack.length - 1]
    result +=  stack.length + lastInStack
  }

  return result
}



/**
 * 这个解法有个问题，保存的数据多了，会爆内存。。。
 * @param {number} n
 * @return {string}
 */
var countAndSay = (n) => {
  const arr = new Array(n)
  arr[0] = '1'
  for (let index = 1; index < arr.length; index++) {
    const previousStr = arr[index - 1]
    arr[index] = generateStr(previousStr)
  }

  return arr[n -1]
};

countAndSay(4)