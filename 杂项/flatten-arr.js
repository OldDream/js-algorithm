function flatten(arr) {
  const result = []
  function _flat(inputArr) {
    for (const item of inputArr) {
      if (Array.isArray(item)) {
        _flat(item)
      } else {
        result.push(item)
      }
    }
  }
  _flat(arr)
  return result
}

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
console.log(flatten(arr))