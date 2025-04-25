/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    let ans=0;
    let map= new Map();
    map.set(0,1)
    let prefixCount=0;

    // for(let i=0;i<nums.length;i++){
    //         let cnt=0;
    //     for(let j=i;j<nums.length;j++){
    //          if(nums[j]%modulo===k){
    //             cnt++;
                
    //          }
    //          if(cnt%modulo===k){
    //             ans++;
    //         }
    //     }
    
    // }
    for(let num of nums){
        if(num%modulo===k){
            prefixCount++;
        }
        let modValue= prefixCount % modulo;
        let needed= (prefixCount-k+modulo) % modulo;
         ans+= map.get(needed)||0;
        map.set(modValue,(map.get(modValue)||0)+1)
    }
    return ans
};