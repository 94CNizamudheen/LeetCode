/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max= 0;;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j]){
                max= Math.max(max,(nums[j]-nums[i]));
            }
        }
    }
    return (max==0) ?-1 :max;
};