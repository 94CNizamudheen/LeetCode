/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    let result=[];
    let j=0
    for(let i=0;i<nums.length;i++){
        let start=nums[i];
        let end=-Infinity
        while((nums[i]+1)===nums[i+1]){
            end= nums[i+1];
            i++
        }
        (end!==-Infinity) ? result.push(`${start}->${end}`) : result.push(`${start}`)
    }
    return result
};