// First unique character
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1
        } else {
            map[s[i]] += 1 
        }
    }
      
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i
        }
    }
      
    return -1
};