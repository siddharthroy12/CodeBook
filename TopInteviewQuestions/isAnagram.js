// Is Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    
    let counter = {}
    
    // Count the letters in s
    for (let i = 0; i < s.length; i++) {
       if (counter[s[i]] === undefined) {
           counter[s[i]] = 1
       } else {
           counter[s[i]] += 1
       }
    }
    
    // Count the letters in t
    for (let i = 0; i < t.length; i++) {
        if (counter[t[i]]) {
            counter[t[i]] -= 1
        }
    }
    
    for (let i = 0; i < s.length; i++) {
       if (counter[s[i]] !== 0) {
           return false
       }
    }
    
    return true
};