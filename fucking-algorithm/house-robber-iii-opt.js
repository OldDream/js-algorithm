/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  // 返回一个数组，index 1为不抢，index0为抢
  function _rob(node) {
    if (node === null) return [0, 0];
    const robLeft = _rob(node.left)
    const robRight = _rob(node.right)

    const robThis = node.val + robLeft[1] + robRight[1]
    const notThis = Math.max(robLeft[0], robLeft[1]) + Math.max(robRight[0], robRight[1]) 
    
    return [robThis, notThis]
  }

  const res = _rob(root)
  return Math.max(res[0], res[1])
};