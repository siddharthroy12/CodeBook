// Factorial Trailling Zeroes
/**
 * @param {number} n
 * @return {number}
 */
// Just Count Fives lol
var trailingZeroes = function(n) {
    let res = 0
    
    while (n > 0) {
        res += Math.floor(n/5)
        n /= 5
    }
    
    return res
};