/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {

    let prefix=[nums[0]];
    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]+1){
            prefix.push(nums[i]);
        }else{
            break;
        }
    }
    let sum= prefix.reduce((acc,num)=>num+acc,0);
    
    let set= new Set(nums);
    while(set.has(sum)){
        sum++;
    }
    return sum
};