/**
 * 使用新Api
 * @param {*} arr 
 */
function flattenArray(arr) {
  // 扁平化
  let flatArr = arr.flat(Infinity)
  // 去重
  let disArr = Array.from(new Set(flatArr))
  // 排序
  let result = disArr.sort(function (a, b) {
    return a - b
  })
  return result
}

/**
 * 使用reduce
 * @param {*} arr 
 */
function flattenArray2(arr) {
  // function flatten(arr) {
  //   return arr.reduce((pre, next) => {
  //     if (Array.isArray(next)) { return pre.concat(flatten(next)); }
  //     else {
  //       if (!isNaN(next)) {
  //         return pre.concat(next);
  //       }
  //     }
  //     return pre;
  //   }, []);
  // }
  const flat = (a, b) => {
    return a.concat(Array.isArray(b) ? flattenArray2(b) : b)
  }
  const flatArr = arr.reduce(flat, [])
  // const flatArr = flatten(arr)

  return [...new Set(flatArr)].sort((a, b) => a - b);
}


var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
console.log(flattenArray2(arr))