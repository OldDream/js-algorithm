/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 进行递归的比较，直接比较对称位置的两个点。
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return check(root,root)
};

function check(node1,node2) {
  if (node1 === null && node2 === null) return true;
  if (node1 ===null || node2 === null) return false;
  if (node1.val != node2.val) {
    return false;
  }
  return check(node1.left, node2.right) && check(node1.right, node2.left)
}