/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
代码

const solution = (isBadVersion) => {
  // n是版本总数 函数返回第一个错误的版本号
  return (n) => {
    let low = 0, high = n;
    let firstBadVer = n;
    while (low <= high) {
      const mid = (low + high) >>> 1;  // 无符号右移一位 相当于除2 + 向下取整，二进制左边补0，想一下二进制转十进制的原理
      if (isBadVersion(mid)) {
        firstBadVer = mid; // mid是坏版本，
        high = mid - 1; // 将右指针考察mid-1
      } else {
        low = mid + 1; // mid还不是坏版本，将左指针考察到mid+1
      }
    }
    return firstBadVer;
  };
};

const solution = (isBadVersion) => {
  // n是版本总数 函数返回第一个错误的版本号
  return (n) => {
    let left = 1, right = n, firstBadVer = null,mid
    while (left <= right) {
      // mid = (left + right) >>> 1  // this is slower
      mid = Math.floor((left + right) /2) // this is faster
      if (isBadVersion(mid)) {
        firstBadVer = mid
        right = mid - 1  // 已经存下来了，可以不检查
      } else {
        left = mid + 1
      }
    }
    return firstBadVer
  };
};