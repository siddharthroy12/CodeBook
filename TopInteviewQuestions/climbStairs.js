// Climb Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0) {
        return 0;
    } else if(n === 1) {
        return 1
    } else if(n === 2) {
        return 2
    } else {
        let n1 = 1
        let n2 = 2
        let res = 0
        
        while (n > 2) {
            res = n1 + n2
            n1 = n2
            n2 = res
            n--
        }
        return res
    }
};