
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 广度优先的实现
 * 需要使用 Queue ，js 中的 Array 用 push
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  const queue = [root]
  let layerNum = 0
  while (queue.length !== 0) {
    let size = queue.length
    while (size > 0) { // 此时 size 是本层所有节点的数量
      // 把本层节点的子节点全部加入
      const tempNode = queue.shift()
      if (tempNode.left) {
        queue.push(tempNode.left)
      }
      if (tempNode.right) {
        queue.push(tempNode.right)
      }
      size--
    }
    layerNum++
  }
  return layerNum
};