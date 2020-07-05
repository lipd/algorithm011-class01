// N 叉树的层序遍历
/**
 * Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const path = [];

  const traversal = (node, level) => {
    if (!node) return;
    path[level] = path[level] || [];
    path[level].push(node.val);
    node.children.forEach(child => traversal(child, level + 1));
  }

  root && traversal(root, 0);

  return path;
};
