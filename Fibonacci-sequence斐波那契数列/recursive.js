const length = 10
const result = new Array(length)
function getNum(index) {
  if (index === 0 || index === 1) {
    return 1
  }
  return getNum(index -1) + getNum(index-2)
}

for (let index = 0; index < length; index++) {
  result[index] = getNum(index)
}

console.log(result.toString(','))