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
 * 因为坏版本号是有序的，所以直接二分查找。
 * @param {function} isBadVersion()
 * @return {function}
 */

const solution = (isBadVersion) => {
  // n是版本总数 函数返回第一个错误的版本号
  return (n) => {
    let left = 1, right = n, firstBadVer = null,mid
    while (left <= right) {
      // mid = (left + right) >>> 1  // this is slower
      mid = Math.floor((left + right) /2) // this is faster
      if (isBadVersion(mid)) {
        firstBadVer = mid
        right = mid - 1  // firstBadVer 已经存下来了，mid 可以不检查，排除在下次循环外
      } else {
        left = mid + 1 // 不是坏版本，排除在外
      }
    }
    return firstBadVer
  };
};