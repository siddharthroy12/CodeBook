// Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs ={
        '(':')',
        '{':'}',
        '[':']'
    }
    
    // Stack of brackets to be closed
    let toClosed = [s[0]]
    
    // If first bracket is closed then its not valid
    for (let i in pairs) {
        if (toClosed[0] === pairs[i]) {
            return false
        }
    }
    
    // Check if the letter is the key of pairs
    let inPairsKey = (i) => {
        for (let j in pairs) {
            if (j === i) {
                return true
            }
        }
        return false
    }
    
    for (let i = 1; i < s.length; i++) {
        if (inPairsKey(s[i])) {
            toClosed.push(s[i])
        } else if (s[i] === pairs[toClosed[toClosed.length -1]]) {
            toClosed.pop()
        } else {
            return false
        }
    }
    
    // If not all are closed then it's not valid
    if (toClosed.length !== 0) {
        return false
    }
    
    return true
};