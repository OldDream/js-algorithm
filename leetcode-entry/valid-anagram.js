/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
  // 思路：在一个hashMap中用字符做key，出现次数做value，s中出现一次+1，t中出现一次-1，如果减出了负数，直接返回.
  // 因为开头就检查过长度差异，所以能走过两个循环，就代表是字母异位词
  if (s.length !== t.length) {
    return false
  }
  let hashMap = {}
  for (let index = 0; index < s.length; index++) {
    const key = s[index];
    if (hashMap[key]) {
      hashMap[key] = hashMap[key] + 1
    } else {
      hashMap[key] = 1
    }
  }
  for (let index = 0; index < t.length; index++) {
    const key = t[index];
    if (hashMap[key]) {
      hashMap[key] = hashMap[key] - 1
      if (hashMap[key] < 0) {
        return false
      }
    } else {
      return false
    }
  }
  return true
};

let isAnagram = function (s, t) {
  // 思路：拆成字符串后sort，每一index对应的内容应相同
  s = [...s]
  t = [...t]
  if (s.length !== t.length) {
    return false
  }
  s = s.sort()
  t = t.sort()
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== t[index]) {
      return false
    }
  }

  return true
};
