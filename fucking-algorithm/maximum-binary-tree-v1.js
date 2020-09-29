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
  function build(low, high) {
    if (low > high) return null;
    let maxNum = Number.NEGATIVE_INFINITY,
      maxIndex = -1;
    for (let index = low; index <= high; index++) {
      let val = nums[index];
      if (val > maxNum) {
        maxNum = val;
        maxIndex = index;
      }
    }
    const thisNode = new TreeNode(maxNum);
    thisNode.left = build(low, maxIndex-1);
    thisNode.right = build(maxIndex+1, high)
    return thisNode;
  }

  return build(0, nums.length - 1);
};
