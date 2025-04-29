/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max=Math.max(...nums)
    let count=0;
    let maxCount=0
    let left=0
    for(let i=0;i<nums.length;i++){ 
        if(nums[i]===max) maxCount++;
        while(maxCount>=k){
            count+=nums.length-i;
            console.log(count)
            if(nums[left]===max)maxCount--;
            left++
        }
    }
        
    return count
};