/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null
  let middleIndex = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[middleIndex])
  if (middleIndex === 0) {
    return root
  }
  // 处理左子树
  let leftChile = sortedArrayToBST(nums.slice(0, middleIndex))
  // 处理右子树
  let rightChile = sortedArrayToBST(nums.slice(middleIndex + 1))
  // 生成 root 节点
  root.left = leftChile
  root.right = rightChile
  return root
};

