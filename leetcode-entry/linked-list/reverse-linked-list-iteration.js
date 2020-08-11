/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代法，双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null, // current 的前一个节点
    current = head
  while (current) {
    let tempNextNode = current.next
    current.next = pre
    pre = current
    current = tempNextNode
  }
  return pre
};