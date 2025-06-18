/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    let ans=[];
    nums.sort((a,b)=>a-b)
    while(nums.length){
        let current= nums.splice(0,3)
        if((current[2]-current[1] <=k)  && (current[2]-current[0] <=k)  ){
            ans.push(current)
        }else{
            return []
        }
    }
   return ans
};