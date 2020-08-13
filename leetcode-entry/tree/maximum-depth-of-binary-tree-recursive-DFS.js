/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归，期原理本质上就是 深度优先
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0
  } else {
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
  }
};

