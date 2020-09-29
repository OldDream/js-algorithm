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
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let maxNum = Number.NEGATIVE_INFINITY,
    maxIndex = -1;
  nums.forEach((val, index) => {
    if (val > maxNum) {
      maxNum = val;
      maxIndex = index;
    }
  });
  const thisNode = new TreeNode(maxNum);
  thisNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  thisNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return thisNode;
};
