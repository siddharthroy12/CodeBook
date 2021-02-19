// Count Primes
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    let arr = new Array(n).fill(true)
    
    for (let i = 2; i*i <= n; i++) {
        if (arr[i]) {
            for (let j = i*i; j <= n; j += i) {
                arr[j] = false
            }
        }
    }
    
    for (let i = 2; i <= n; i++) {
        if (arr[i]) {
            count++
        }
    }
    
    
    return count
};