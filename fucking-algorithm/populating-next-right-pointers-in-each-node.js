/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  function connectTwoNode(nodeLeft, nodeRight) {
    if (nodeLeft) {
      nodeLeft.next = nodeRight;
      connectTwoNode(nodeLeft.left, nodeLeft.right);
      connectTwoNode(nodeLeft.right, nodeRight ? nodeRight.left : null);
    }
    if (nodeRight) {
      connectTwoNode(nodeRight.left, nodeRight.right);
    }
  }
  if (!root) return root;
  connectTwoNode(root.left, root.right);
  return root;
};
