// Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nums = (n+'').split("")
    let sum = 0
    let seen = {}
    while (true) {
        for (let i = 0; i < nums.length; i++) {
            sum += Number(nums[i]) * Number(nums[i])
        }
        if (sum === 1) {
            return true
        }
        if (seen[sum] === true) {
            return false
        } else {
            seen[sum] = true
        }
        nums = (sum+'').split("")
        sum = 0
    }
    return false
};