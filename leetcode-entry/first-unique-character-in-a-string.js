/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。筛选
 * @param {string} s
 * @return {number}
 */
// let firstUniqChar = function (s) {
//   let countMap = new Map()
//   for (let index = 0; index < s.length; index++) {
//     const element = s.charAt(index);
//     if (countMap.has(element)) {
//       let val = countMap.get(element)
//       countMap.set(element, val + 1)
//     } else {
//       countMap.set(element, 1)
//     }
//   }
//   const mapkeys = countMap.keys()
//   let singleChar = null
//   for (const key of mapkeys) {
//     if (countMap.get(key) === 1) {
//       singleChar = key
//       break;
//     }
//   }

//   if (singleChar === null) {
//     return -1
//   } else {
//     return s.indexOf(singleChar)
//   }
// };

let firstUniqChar = function (s) {
  s = [...s]
  let charCountMap = {}
  let singleCharMap = new Map()
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (!charCountMap[element]) {
      // 没保存过
      charCountMap[element] = 1
      singleCharMap.set(element, index)
    } else {
      charCountMap[element]++
      singleCharMap.delete(element)
    }
  }

  if (singleCharMap.size == 0) {
    return -1;
  }

  let val = singleCharMap.values().next().value
  return val
};

let s = "leetcode"
console.log(firstUniqChar(s))

