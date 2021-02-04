// Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = {}
    
    // Store the unique number as true and others as false
    for (let i = 0; i < nums.length; i++) {
        if (!(hashMap[nums[i]])) {
            hashMap[nums[i]] = true // If number doesn't exist add it as true
        } else if (hashMap[nums[i]]) {
            hashMap[nums[i]] = false // If number exist set it as false
        }
    }
    
    // Find the number with true and return it
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            return nums[i]
        }
    }
};