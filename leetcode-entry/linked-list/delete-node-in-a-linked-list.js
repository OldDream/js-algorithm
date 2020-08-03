/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 碰不到之前的节点啊，麻痹的只能把当前节点的值换掉，把当前节点的next换成 后一个节点的，这tm是干掉了写一个节点啊！！！
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};