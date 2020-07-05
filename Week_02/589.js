// N 叉树的前序遍历
/**
 * Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const path = [];
  const recursion = (node) => {
    path.push(node.val);
    if (node) {
      node.children.forEach(child => recursion(child));
    }
  }
  root && recursion(root);
  return path
};