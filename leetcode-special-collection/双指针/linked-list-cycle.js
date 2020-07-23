/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 
 * 使用双指针，一个指针每次移动一个节点，一个指针每次移动两个节点，如果存在环，那么这两个指针一定会相遇。
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function (head) {
  if (head == null) {
    return false
  }
  let nodeSlow = head, // 每次一步
    nodeFast // 每次2步
  if (head.next === null) {
    nodeFast = null
  }
  if (head.next) {
    nodeFast = head.next.next
  }
  while (nodeFast !== null) {
    if (nodeSlow === nodeFast) {
      return true
    }
    nodeSlow = nodeSlow.next

    // 走两步
    nodeFast = nodeFast.next // 处理第一步
    if (nodeFast && nodeFast.next) {
      nodeFast = nodeFast.next
    } else {
      // 处理第二步
      nodeFast = null
    }
  } 

  return false
};