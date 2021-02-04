// Excel Sheet Column Number
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0
    for (let i =0; i < s.length; i++) {
        sum *= 26
        sum += s.charCodeAt(i) - 'A'.charCodeAt(0) + 1
    }
    return sum
};