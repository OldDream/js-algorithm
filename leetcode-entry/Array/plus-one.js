/**
 * BigInt法
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let num = (BigInt(digits.join('')) + 1n).toString()
  let arr = num.split('')
  return arr
};

/**
 * 字符串法
 */
const plusOne = (digits) => {
  let addOneToNext = true
  for (let index = digits.length - 1; index >= 0; index--) {
    if (addOneToNext) {
      const element = digits[index];
      let plusNum = element + 1
      if (plusNum === 10) {
        digits[index] = 0
      } else {
        addOneToNext = false
        digits[index] = plusNum
        break;
      }
    }
  }
  if (addOneToNext) {
    // digits.unshift(1)
    return [1,...digits]
  }
  return digits
};
console.log(plusOne([9]))
