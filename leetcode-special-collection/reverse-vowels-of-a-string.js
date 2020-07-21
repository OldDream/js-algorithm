/**
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(s) {
  s = [...s]
  let leftPointer = 0
  let rightPointer = s.length - 1
  
  function isVowel(char) {
    const VOWELS = "aeiouAEIOU"
    if (VOWELS.indexOf(char) < 0) {
      return false
    } else {
      return true
    }
  }

  while(leftPointer < rightPointer) {
    if (!isVowel(s[leftPointer])) {
      leftPointer++
      continue
    }
    if (!isVowel(s[rightPointer])) {
      rightPointer--
      continue
    }
    if (isVowel(s[leftPointer]) && isVowel(s[rightPointer])) {
      let temp = s[leftPointer]
      s[leftPointer] = s[rightPointer]
      s[rightPointer] = temp
      leftPointer++
      rightPointer--
    }
  }

  return s.join('')
};