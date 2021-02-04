// Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [
        [1],
        [1,1]
    ]
    
    if (numRows < 3) {
        let tmp = []
        for (let i = 0 ; i < numRows; i++) {
            tmp.push(res[i])
        }
        
        return tmp
    }
    
    for (let i = 2; i < numRows; i++) {
        let tmp = [1]
        
        for (let j = 0; j < res[i-1].length -1; j++) {
            tmp.push(res[i-1][j] + res[i-1][j+1])            
        }
        tmp.push(1)
        res.push(tmp)
    }
    
    return res
};