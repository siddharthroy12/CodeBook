// Remove Duplicate Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currIndex = 0
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[currIndex]) {
            currIndex++
            nums[currIndex] =  nums[i]
        }
    }
    
    return currIndex + 1
};