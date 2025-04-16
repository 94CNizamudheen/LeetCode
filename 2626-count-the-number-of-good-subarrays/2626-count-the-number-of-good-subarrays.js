/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let left=0;
    let pairCount=0;
    let result=0;
    let freq=new Map()
    for(let right=0;right<nums.length;right++){
        let num=nums[right];
        let count= freq.get(num)||0;
        freq.set(num,count+1)
        pairCount+=count
        console.log("--",freq.get(num))
        
        while(pairCount>=k){

            result+= nums.length-right;
            let leftNum=nums[left];
            let leftCount=freq.get(leftNum)
            pairCount-= leftCount-1;
            freq.set(leftNum,leftCount-1);
            left++;
            
        }
        
    }
   
    return result
};