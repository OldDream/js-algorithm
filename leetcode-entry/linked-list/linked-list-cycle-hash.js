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
  let hashMap = new Map()
  while(head) {
    let mapVal = hashMap.get(head)
    if (mapVal) {
      return true
    } else {
      hashMap.set(head, true)
    }
    head = head.next
  }
  return false
};