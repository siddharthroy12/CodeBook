// Power of three
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // 1162261467 = 3^19
    return n > 0 && 1162261467 % n === 0
};