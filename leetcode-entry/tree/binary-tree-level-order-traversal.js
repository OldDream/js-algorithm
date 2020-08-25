/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  const result = []
  let queue = [root]
  while (queue.length > 0) {
    result.push(queue)
    const currentLayer = queue
    queue = []
    let index = 0
    while (index < currentLayer.length) {
      const tempNode = currentLayer[index]
      tempNode.left && queue.push(tempNode.left)
      tempNode.right && queue.push(tempNode.right)
      index++
    }
  }
  const resultVal = []
  for (const innerArr of result) {
    const tempArr = []
    for (const node of innerArr) {
      tempArr.push(node.val)
    }
    resultVal.push(tempArr)
  }
  return resultVal
};