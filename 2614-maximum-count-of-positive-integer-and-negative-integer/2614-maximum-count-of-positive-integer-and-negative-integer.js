/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negcount=0;
    let poscount=0;
    for(let num of nums){
        if(num>0)poscount++;
        else if(num<0) negcount++;
    }
    return Math.max(negcount,poscount)
    
};