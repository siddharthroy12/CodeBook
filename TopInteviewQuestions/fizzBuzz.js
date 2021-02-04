// Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let i = 1
    let res = []
    
    while(i <= n) {
        if (i % 5 === 0 && i % 3 === 0) {
            res.push('FizzBuzz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else {
            res.push(i+"")
        }
        i++
    }
    
    return res
};