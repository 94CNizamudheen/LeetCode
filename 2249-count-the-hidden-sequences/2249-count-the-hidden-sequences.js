/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {

    let minPrefixSum=0, maxPrefixSum=0, currentSum=0;
    for(let diff of differences){
        currentSum+=diff;
        minPrefixSum= Math.min(minPrefixSum,currentSum)
        maxPrefixSum=Math.max(maxPrefixSum,currentSum)
    }
    let minStart= lower-minPrefixSum;
    let maxStart= upper-maxPrefixSum;
    console.log(minStart,maxStart)
    let result= maxStart- minStart+1
    
    return result>=0 ? result : 0;
    
};