/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    
    let minPossibleSum=Infinity;

    for(let j=1;j<nums.length-1;j++){
        let leftSum=Infinity;
        let rightSum=Infinity;

        for(let i=0;i<j;i++){
            if(nums[j]>nums[i]){
                leftSum=Math.min(leftSum,nums[i]);
            }
        }
        for(let k=j+1;k<nums.length;k++){
            if(nums[k]<nums[j]){
                rightSum=Math.min(rightSum,nums[k])
            }
            
        }
        if(leftSum < Infinity && rightSum<Infinity){
            let currentSum= leftSum+nums[j]+rightSum;
            minPossibleSum=Math.min(minPossibleSum,currentSum)
        }
    }
    return minPossibleSum===Infinity ? -1 : minPossibleSum ;
};