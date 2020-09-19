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
  // 抢这栋房子能得到的收益，拿n + （n+2）这一栋；
  // 放过这房子，抢下一栋，能得到的收益 0 + （n+1）；
  // 两者对比，得到当前节点的最佳收益
  // 怎么处理抢下一栋时不知道自己是否已经被抢过的问题？
  // 其实递归的方法已经自然解决了这个问题,_rob中传入的每一个节点，都和上一个节点保持了合法距离

  const memo = new Map()
  function _rob(currentNode) {
    if (currentNode === null) return 0;
    if (memo.has(currentNode)) { // 去重
      return memo.get(currentNode)
    }
    // console.log(JSON.stringify(currentNode));
    // console.log(Boolean(currentNode.left));
    // 抢本节点 + 下下个节点
    const robThis = currentNode.val +
      (currentNode.left ? _rob(currentNode.left.left) + _rob(currentNode.left.right) : 0) +
        (currentNode.right ? _rob(currentNode.right.left) + _rob(currentNode.right.right) : 0)
    // 不抢本节点，抢下一个节点
    const robNext = _rob(currentNode.left) + _rob(currentNode.right)
    const result = Math.max(robThis, robNext)
    memo.set(currentNode, result)
    return result
  }

  return _rob(root)
};