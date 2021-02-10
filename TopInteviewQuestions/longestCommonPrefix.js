// Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) {
        return ""
    }

    if (strs.length === 1) {
        return strs[0]
    
    }
    
    let common = strs[0]
    let commonTo = strs[0].length
    
    for (let i = 1; i < strs.length ; i++) {
        if (strs[i].length < commonTo) {
            let count = strs[i].length
            for (let j = 0; j < strs[i].length; j++) {
                if (strs[i][j] !== common[j]) {
                    count = j
                    break;
                }
            }
            commonTo = count
        } else {
            for (let j = 0; j < commonTo; j++) {
                if (strs[i][j] !== common[j]) {
                    commonTo = j
                    break;
                }
            }
        }
    }
    
    let res = ""
    
    for (let i = 0; i < commonTo; i++) {
        res += common[i]
    }
    
    return res
};