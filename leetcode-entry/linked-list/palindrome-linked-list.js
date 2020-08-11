
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const tempArr = []
  let pre = head
  while(pre) {
    tempArr.push(pre)
    pre = pre.next
  }
  for (let i = 0, j = tempArr.length - 1; i < j; i++, j--) {
    if (tempArr[i].val !== tempArr[j].val) {
      return false
    }
  }
  return true
};