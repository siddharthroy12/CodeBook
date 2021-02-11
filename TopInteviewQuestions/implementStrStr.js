// Implement strStr
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let match = true
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] !== haystack[j + i]) {
                    match = false
                }
            }
            
            if (match) {
                return i
            }
        }
    }
    
    return -1
};