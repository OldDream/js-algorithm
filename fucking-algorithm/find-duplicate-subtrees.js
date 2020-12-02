/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  // 后续遍历解决问题，1、所有子树都已构建完毕，直接比较即可，用map记录子树，出现次数大于1的，即可记录
  var resultMap = new Map();
  var resultSet = new Set();
  _findDuplicateSubtrees(root, resultMap, resultSet);
  return [...resultSet];
};

function _findDuplicateSubtrees(root, resultMap, resultSet) {
  if (root === null) return;
  _findDuplicateSubtrees(root.left, resultMap, resultSet);
  _findDuplicateSubtrees(root.right, resultMap, resultSet);
  var str = serialize(root);
  var duplicate = resultMap.get(str);
  if (duplicate) {
    if (duplicate == 1) {
      resultSet.add(root);
    }
    resultMap.set(str, ++duplicate);
  } else {
    resultMap.set(str, 1);
  }
  return;
}

function serialize(root) {
  // 利用前序遍历处理这个问题
  var res = _serialize(root, '');
  return res;
}

function _serialize(root) {
  // null 用 # 代替
  var result;
  if (root === null) {
    result = '#,';
    return result;
  }
  result = `${root.val},`;
  result += _serialize(root.left);
  result += _serialize(root.right);
  return result;
}
