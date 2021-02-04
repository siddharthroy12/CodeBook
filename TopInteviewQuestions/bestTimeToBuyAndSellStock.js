// Best Time to buy and sell stock
/** Brute Force o(n^2)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    for (let i = 0; i < prices.length -1; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > max) {
                max = prices[j] - prices[i]
            }
        }
    }
    return max
};

/** Better Performance o(n)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = [prices[i]]
        } else if(prices[i] - min > max)  {
            max = prices[i] - min
        }
    }
    return max
};