// Sum of two integers
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let res = 0
    let test1 = 0
    let test2 = 0
    if(a < 0) test1 = ~a+1;
    if(b < 0) test2 = ~b+1;
    
    if (test1 > test2) {
        res = a
        if (b < 0) {
            for (let i =0; i > b; i--) {
                res--
            }
        } else {
            for (let i=0 ; i < b; i++ ) {
                res++
            }
        }
    } else {
        res = b
        if (a < 0) {
            for (let i =0; i > a; i--) {
                res--
            }
        } else {
            for (let i=0 ; i < a; i++ ) {
                res++
            }
        }
    }
    return res
};