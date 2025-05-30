/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let totalsum= nums.reduce((acc,val)=>acc+val,0);
    console.log(totalsum)
    let leftSum=0;
    for(let i=0;i<nums.length;i++){
        let rightSum=totalsum-leftSum-nums[i];
        if(leftSum===rightSum){
            return i
        }
        leftSum+=nums[i]
    };
    return -1

};