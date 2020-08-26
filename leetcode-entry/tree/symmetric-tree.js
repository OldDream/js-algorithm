/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 广度优先
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) {
    return true
  }
  let queue = [root]
  while(queue.length > 0) {
    const layerSize = queue.length // 本层的尺寸
    const currentLayer = queue
    for (let indexLeft = 0, indexRight = queue.length - 1; indexLeft <= indexRight; indexLeft++, indexRight--) {
      const left = currentLayer[indexLeft];
      const right = currentLayer[indexRight];
      if (left === right) {  // 两者均为null
        continue;
      }
      if (left === null || right === null) { // 其中一个为null
        return false
      }
      if (left.val !== right.val) {
        return false
      }
    }
    queue = []
    let temp = layerSize
    while (temp > 0) {
      // 处理下一层的数据
      let currentNode = currentLayer.shift()
      if (currentNode !== null) {
        // null 也要压进去，用于鉴定对称
        queue.push(currentNode.left) 
        queue.push(currentNode.right)
      }
      temp--
    }
  }
  return true
};