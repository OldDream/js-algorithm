/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const arr = new Array(n)
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index %5 === 0) {
      arr[index - 1]='FizzBuzz'
    } else if (index % 3 === 0) {
      arr[index - 1]='Fizz'
    } else if (index % 5 === 0) {
      arr[index - 1]='Buzz'
    } else {
      arr[index - 1]=index + ''
    }
  }
  return arr
};