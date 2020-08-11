/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre = { next: head } // 在head前设置一个前置节点
  let start = pre, end = pre
  // 把 start 移到合适位置
  while(n) {
    start = start.next
    n--
  }
  // start end 同时移动，寻找链表末端
  while(start.next) {
    start = start.next
    end = end.next
  }
  end.next = end.next.next // 删除倒数第 n 个节点， 边界情况 end.next.next === head.next

  return pre.next
};