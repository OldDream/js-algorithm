/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // 利用前序遍历处理这个问题
  var res = _serialize(root, '');
  console.log(res)
  return res;
};

function _serialize(root) {
  // null 用 # 代替
  var result
  if (root === null) {
    result = '#,';
    return result;
  }
  result = `${root.val},`;
  result += _serialize(root.left);
  result += _serialize(root.right);
  return result;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  var list = data.split(',');
  console.log(list)
  var val = list.shift()
  if (val === '#') { // 处理树的末尾
    return null
  }
  var root = new TreeNode(val);
  root.left = _deserialize(list);
  root.right = _deserialize(list);
  return root;
};

function _deserialize(list) {
  var val = list.shift()
  if (val === '#') { // 处理树的末尾
    return null
  }
  var root = new TreeNode(val);
  root.left = _deserialize(list);
  root.right = _deserialize(list);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
