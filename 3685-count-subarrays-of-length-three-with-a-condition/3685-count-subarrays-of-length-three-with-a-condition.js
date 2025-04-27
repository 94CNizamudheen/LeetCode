/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count=0;

    // for(let i=0;i<nums.length;i++){
    //     let arr=[];
    //     for(let j=i;j<i+3;j++){
    //         if(j>nums.length) break
    //         arr.push(nums[j]);
    //         if(arr.length===3 && (arr[0]+arr[2])===(arr[1]/2)){
    //             count++;
    //         }
    //     }
    // }
    // return count
    for(let i=0;i<nums.length-2;i++){
        if((nums[i]+nums[i+2])*2===nums[i+1]){
            count++;
        }
    }
    return count
};