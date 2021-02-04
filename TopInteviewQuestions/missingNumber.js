// Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
// Easy but slow
var missingNumber = function(nums) {
    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true
    }
    
    for (let i = 0; i < nums.length + 1; i++) {
        if (map[i] === undefined) {
            return i
        }
    }
};
// Fast but math
var missingNumber = function(nums) {
    let expectedSum = nums.length*(nums.length + 1)/2;
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i]
    }
    return expectedSum - actualSum;
};