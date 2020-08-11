/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let node1 = l1,
    node2 = l2,
    result = new ListNode(-1, null)
  resultHead = result
  while (node1 !== null && node2 !== null) {
    if (node1.val <= node2.val) {
      // console.log('从 node1 拿：' + node1.val)
      result.next = node1
      node1 = node1.next
    } else {
      // console.log('从 node2 拿：' + node2.val)
      result.next = node2
      node2 = node2.next
    }
    result = result.next

  }

  let rest = node1 || node2
  result.next = rest

  return resultHead.next

};