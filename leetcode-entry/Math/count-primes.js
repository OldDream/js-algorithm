/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrimeArr = new Array(n).fill(true)

  for (let i = 2; i < n; i++) {
    if (isPrimeArr[i]) {
      console.log(i)
      for (let j = i * 2; j < n; ) {
        isPrimeArr[j] = false
        j += i
      }
    }
  }
  console.log(isPrimeArr)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrimeArr[i]) {
      count++
    }
  }
  return count
};

countPrimes(10)