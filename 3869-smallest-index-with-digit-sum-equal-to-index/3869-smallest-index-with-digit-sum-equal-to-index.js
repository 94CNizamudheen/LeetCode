/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let sum= nums[i].toString().split('').reduce((acc,val)=>acc+Number(val),0)
        if(sum===i) return i
    }
    return -1
};