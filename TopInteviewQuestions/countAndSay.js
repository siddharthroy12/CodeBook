// Count And Say
/**
 * @param {number} n
 * @return {string}
 */
let say = (numbers) => {
    let series = []
    let counts = []
    
    for (let i = 0 ; i < numbers.length; i++) {
        if (series[series.length-1] !== numbers[i]) {
            series.push(numbers[i])
            counts.push(1)
        } else {
            counts[counts.length-1]++
        }
    }
     
    let res = ""
    
    for (let i = 0; i < series.length; i++) {
        res += counts[i]
        res += series[i]
    }
     
    return res
}
 
var countAndSay = function(n) {
    if (n === 1) {
        return "1"
    } else {
        return say(countAndSay(n-1))
    }
};