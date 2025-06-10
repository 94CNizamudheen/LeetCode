/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let count={};
    for(let char of s){
        count[char]= (count[char]||0)+1;
    };
    let even= Object.values(count).filter(val=>val%2==0)
    let odd= Object.values(count).filter(val=>val%2!==0)
    return (Math.max(...odd)-Math.min(...even))
    
};