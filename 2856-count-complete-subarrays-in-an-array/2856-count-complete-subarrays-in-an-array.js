/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {

    let count=0;
    let uniqueSize= new Set(nums).size;
    for(let i=0;i<nums.length;i++){
        let seen= new Set();
        for(let j=i;j<nums.length;j++){
            seen.add(nums[j]);
            if(seen.size===uniqueSize){
                count++;
            }
        }
    }
    return count

};