// Majority element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}
    for (let i =0; i < nums.length; i++) {
        if(count[nums[i]] === undefined) {
            count[nums[i]] = 1
        } else {
            count[nums[i]] += 1
        }
    }
    let highestIndex = 0
    let highestCount = 1
    for (let i =1; i < nums.length; i++) {
        if (count[nums[i]] > highestCount) {
            highestIndex = i
            highestCount = count[nums[i]]
        }
    }
    return nums[highestIndex]
};