/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let indexes=[]
    for(let j=0;j<nums.length;j++){
        if(nums[j]==key){
            let x= Math.max(0,j-k);
            let y= Math.min(nums.length-1,j+k)
            for(let i=x;i<=y;i++){
                if(!indexes.includes(i)){
                    indexes.push(i)
                }
            }
        }
     
    }
    return indexes
};