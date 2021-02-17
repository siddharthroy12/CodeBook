// Rotate array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let pointer1 = 0
    let pointer2 = nums.length - 1
    
    for (let j = 0; j < k; j++) {
        for (let i = 0; i < nums.length; i++) {
            let tmp = nums[pointer1]

            nums[pointer1] = nums[pointer2]
            nums[pointer2] = tmp

            pointer1++
        }
        pointer1 = 0
    }
    
};