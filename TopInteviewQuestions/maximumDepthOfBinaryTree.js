// Maximum depth of binary tree

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
 * @return {number}
 */
var maxDepth = function(root) {
    // Use recusrive DepthFirstSearch and return the length of longest traverse
    if (root === null) {
        return 0
    }

    if (root.left === null && root.right === null) {
        return 1
    }
    
    let leftLength = maxDepth(root.left)
    let rightLength = maxDepth(root.right)
    
    if (leftLength > rightLength) {
        return 1 + leftLength
    } else {
        return 1 + rightLength
    }
};