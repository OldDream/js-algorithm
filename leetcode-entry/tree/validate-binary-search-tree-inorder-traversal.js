/**
 * 递归解法
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * 参考
 * https://labuladong.gitbook.io/algo/shu-ju-jie-gou-xi-lie/er-cha-sou-suo-shu-cao-zuo-ji-jin
 * 
 * 二叉搜索树（Binary Search Tree，简称 BST）是一种很常用的的二叉树。它的定义是：一个二叉树中，任意节点的值要大于等于左子树所有节点的值，且要小于等于右边子树的所有节点的值。
 * 
 * 中序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = []

  const loop = node => {
    if (node === null) {
      return;
    }
    node.left && loop(node.left)
    arr.push(node.val)
    node.right && loop(node.right)
  }

  loop(root)
  for (let index = 0; index < arr.length - 1; index++) {
    const element1 = arr[index];
    const element2 = arr[index + 1];
    if (element1 >= element2) return false
  }
  return true

};
