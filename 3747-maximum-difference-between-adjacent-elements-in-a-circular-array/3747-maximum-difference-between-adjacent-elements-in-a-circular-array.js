/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {

    let max=0;
    for(let i=0;i<nums.length;i++){
        let nextIndex= (i+1)%nums.length;
        let diff= Math.abs(nums[i]-nums[nextIndex])
        max= Math.max(max,diff)
    };
    return max
};