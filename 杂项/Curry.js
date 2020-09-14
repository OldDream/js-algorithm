function add(sum) {
  let fn = (n) => {
    return add(n + sum)
  }
  fn.valueOf = () => sum
  return fn
}

// console.log(+add(1)(2))

function add2() {
  let argsSum = Array.from(arguments).reduce((prev, next) => prev + next)
  let fn = function () {
    return add2(Array.from(arguments).reduce((prev, next) => prev + next) + argsSum)
  }
  fn.valueOf = () => argsSum
  return fn
}
console.log(+add2(1, 2)(1))