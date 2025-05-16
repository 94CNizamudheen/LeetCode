/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let nums= num.split('');
    let large='';
    for(let i=nums.length-1;i>=0;i--){
        if(Number(nums[i])%2!==0){
           large= nums.slice(0,i+1).join('')
           break;
        }
    }
    return large
};