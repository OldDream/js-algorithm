/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 利用前序遍历特性：结果中，首个数字为根节点。
  // 中序遍历特性，根节点左边的所有数字，为其左子树，右侧为其右子树
  // 利用中序得到左右子树的大小，结合前序遍历的结果，就能得到左右子树的根节点，然后就能开始递归了。
  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) {
      return null
    }
    const thisVal = preorder[preStart]
    const thisNodeIndexInInorder = inorder.indexOf(thisVal); // 当前节点在中序中的index
    const leftSize = thisNodeIndexInInorder - inStart; // 左子树尺寸
    // const rightSize = inEnd - thisNodeIndexInInorder; // 右子树尺寸

    const thisNode = new TreeNode(thisVal); // 利用前序遍历的特性，获取当前输入的根节点数值
    thisNode.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      inorder,
      inStart,
      thisNodeIndexInInorder - 1
    ); // 左侧子树以及对应下标
    thisNode.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      inorder,
      thisNodeIndexInInorder + 1,
      inEnd
    ); // 右侧子树以及对应下标
    return thisNode;
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
