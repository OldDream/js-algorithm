/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  var prev2 = 0 // N-2
  var prev1 = 1 // N-1
  if (N == 1) {
    return 1
  }
  if (N == 0) {
    return 0
  }
  for (let index = 2; index <= N; index++) {
    var temp = prev2 + prev1
    prev2 = prev1
    prev1 = temp
  }
  return prev1
};