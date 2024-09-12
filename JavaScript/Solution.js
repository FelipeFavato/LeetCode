
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const checkTree = (root) => root.val === root.left.val + root.right.val;

const root1 = new TreeNode(10, new TreeNode(6), new TreeNode(4));
const root2 = new TreeNode(5, new TreeNode(3), new TreeNode(1));

console.log(checkTree(root1));
console.log(checkTree(root2));