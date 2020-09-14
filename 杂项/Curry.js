function add (sum) {
  let fn = (n) => {
    return add (n + sum)
  }
  fn.valueOf = () => sum
  return fn
}

console.log(+add(1)(2))