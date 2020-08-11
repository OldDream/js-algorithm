/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 递归解法
 * 关键思路： 当前节点的  下一个节点的  下一个节点 指向 当前节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 递归结束条件
  // 同时也处理了空的链表，只有一个节点的链表
  if (head === null || head.next === null) {
    return head
  }

  let current = reverseList(head.next) // 从最后一个满足  head.next ！== null 的节点开始向前处理，从后往前，因此下面设置null的操作没有副作用

  head.next.next = head // 关键思路： 当前节点的  下一个节点的  下一个节点 指向 当前节点
  head.next = null // 消除本节点指向下个节点的连接



  return current
};