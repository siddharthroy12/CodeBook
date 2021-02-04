// Sorted Array to Balanced BST
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return bstHelper(nums, 0, nums.length)
    
};

const bstHelper = (nums, lower, upper) => {
  if (lower === upper) return null;
  
  let mid = Math.floor((lower + upper) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = bstHelper(nums, lower, mid);
  node.right = bstHelper(nums, mid + 1, upper);
  
  return node;
};
