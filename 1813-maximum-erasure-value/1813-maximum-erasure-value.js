/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let currentSum=0;
    let maxSum=0;
    let seen= new Set();
    let j=0;
    for(let i=0;i<nums.length;i++){
        while(seen.has(nums[i])){
            currentSum-=nums[j];
            seen.delete(nums[j])
            j++;
        }
        currentSum+=nums[i];
        seen.add(nums[i]);
        maxSum= Math.max(maxSum,currentSum);
    }
    return maxSum
};