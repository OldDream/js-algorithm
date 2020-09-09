class Stack {
  constructor(arr) {
    this._stack = arr ? [...arr] : []
  }
  push(e) {
    return this._stack.push(e)
  }
  pop(e) {
    return this._stack.pop(e)
  }
  top() {
    return this._stack[this._stack.length - 1]
  }
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const tempArr = [...s]
  const checker = new Stack()
  const leftSample = ['(','{','[']
  const rightSample = [')','}',']']
  for (let index = 0; index < tempArr.length; index++) {
    const element = tempArr[index];
    if (checker.top() === undefined) {
      checker.push(element)
      continue;
    }
    if (rightSample.includes(element)) {
      const topItem = checker.top()
      if (topItem === leftSample[rightSample.indexOf(element)]) {
        checker.pop()
      } else {
        return false
      }
    } else {
      checker.push(element)
    }
  }
  if (checker.top() === undefined) {
    return true
  } else {
    return false
  }
};
