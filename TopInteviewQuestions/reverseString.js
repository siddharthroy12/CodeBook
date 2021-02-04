// Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Start from both end to the center while swapping the numbers 
    let pt1 = 0
    let pt2 = s.length - 1
    while (pt1 < pt2) { // While they don't cross each other
        let tmp = s[pt1]
        s[pt1] = s[pt2]
        s[pt2] = tmp
        pt1++
        pt2--
    }
}