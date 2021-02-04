// House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0
    let rob2 = 0
    let temp = 0
    
    for (let i =0 ; i < nums.length; i++) {
        temp = Math.max(nums[i] + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};
