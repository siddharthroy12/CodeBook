// Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let res = []
    let count = 0
    
    for (let i =0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            res.push(nums[i])
        } else {
            count++
        }
    }
    
    for (let i=0; i < count; i++) {
        res.push(0)
    }
    for (let i=0; i < nums.length; i++) {
        nums[i] = res[i]
    }
};