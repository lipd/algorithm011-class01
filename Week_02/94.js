// 二叉树的中序遍历

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  const path: number[] = [];
  const recursion = (node: TreeNode | null) => {
    if (node) {
      recursion(node.left);
      path.push(node.val);
      recursion(node.right);
    }
  };
  root && recursion(root);
  return path;
}
