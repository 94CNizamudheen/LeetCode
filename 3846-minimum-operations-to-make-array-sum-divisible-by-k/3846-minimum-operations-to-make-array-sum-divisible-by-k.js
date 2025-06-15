/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let max=Math.max(...nums);
    let index= nums.indexOf(max);
    let sum= nums.reduce((acc,item)=>item+acc,0)
    let count=0
    while(sum%k!==0){
        sum--
        count++;
    }
    return count
};