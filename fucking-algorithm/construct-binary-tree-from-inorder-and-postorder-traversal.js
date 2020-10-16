/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );

  function build(
    inorder,
    inorderStart,
    inorderEnd,
    postorder,
    postorderStart,
    postorderEnd
  ) {
    // 利用后序遍历特性：结果中，最后一个数字为根节点。
    // 中序遍历特性，根节点左边的所有数字，为其左子树，右侧为其右子树
    // 利用中序得到左右子树的大小，结合前序遍历的结果，就能得到左右子树的根节点，然后就能开始递归了。
    if (inorderStart > inorderEnd || postorderStart > postorderEnd) {
      return null;
    }
    const rootVal = postorder[postorderEnd];
    const rootIndexAtInorder = inorder.indexOf(rootVal);
    const rightSize = inorderEnd - rootIndexAtInorder; // 右子树长度

    const rootNode = new TreeNode(rootVal);
    rootNode.left = build(
      inorder,
      inorderStart,
      rootIndexAtInorder - 1,
      postorder,
      postorderStart,
      postorderEnd - 1 - rightSize
    );
    rootNode.right = build(
      inorder,
      rootIndexAtInorder + 1,
      inorderEnd,
      postorder,
      postorderEnd - rightSize,
      postorderEnd - 1
    );

    return rootNode;
  }
};
