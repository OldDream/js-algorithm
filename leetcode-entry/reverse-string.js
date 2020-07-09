/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = (s) => {
  for (let index = 0; index < s.length / 2; index++) {
    const temp = s[index]
    s[index] = s[s.length - 1 - index]
    s[s.length - 1 - index] = temp
  }
};

// 双指针
let reverseString = function(s) {
  let i = 0, j = s.length - 1;
  while( i < j ){
      [ s[i], s[j] ] = [ s[j], s[i] ]    // es6 解构赋值
      i++;
      j--
  }
};

const strArr = ["h","e","l","l","o"]
reverseString(strArr)
console.log(strArr)