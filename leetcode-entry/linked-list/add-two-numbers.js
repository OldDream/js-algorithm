/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null,
    current // 新数组中当前所在节点
  let pointer1 = l1,
    pointer2 = l2,
    carry = false // 是否需要进位


  while (pointer1 && pointer2) {
    let tempVal = Number(pointer1.val) + Number(pointer2.val)
    if (carry) { // 处理上次相加的进位
      tempVal++
      carry = false
    }
    if (tempVal >= 10) { // 本次相加进位处理
      carry = true
      tempVal -= 10
    }
    // console.log(tempVal)
    const tempNode = new ListNode(tempVal)
    // console.log(tempNode)
    if (head === null) {
      head = tempNode
      current = head
    } else {
      current.next = tempNode
      current = current.next
    }
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }
  // 此时遇到了某个两边结束 or 两个同时结束
  let lastLink = pointer1 || pointer2

  while (lastLink !== null) {
    // 还有剩余的
    let tempVal = Number(lastLink.val)
    if (carry) { // 处理上次相加的进位
      tempVal++
      carry = false
    }
    if (tempVal >= 10) { // 本次相加进位处理
      carry = true
      tempVal -= 10
    }
    const tempNode = new ListNode(tempVal)
    current.next = tempNode
    current = current.next
    lastLink = lastLink.next
  }
  // 处理结束后最后一位
  if (carry) {
    const tempNode = new ListNode(1)
    current.next = tempNode
  }

  return head
};