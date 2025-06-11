/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let longest=1;
    let count=1
    for(let i=1;i<nums.length;i++ ){
        if(nums[i-1]<nums[i]){
            count++
        }else{
            count=1
        }
         longest= Math.max(longest,count)
    }
    return longest
};