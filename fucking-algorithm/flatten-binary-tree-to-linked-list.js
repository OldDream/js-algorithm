/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  // 完成当前节点的左右子树变换
  const tempRight = root.right;
  root.right = root.left;
  root.left = null;
  let endOfRight = root;
  //  寻找最末端
  while (endOfRight.right) {
    endOfRight = endOfRight.right;
  }
  endOfRight.right = tempRight
  
  return;
};
