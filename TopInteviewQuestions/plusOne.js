// Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = 0
    let j = digits.length - 1
    
    for (i=j; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }
    
    if (i === -1) {
        digits.unshift(1)
        return digits
    }
}
