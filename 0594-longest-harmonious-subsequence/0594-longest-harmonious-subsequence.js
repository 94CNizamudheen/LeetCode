/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map= new Map()
    let longest=0;
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
    }
    for(let [key,val] of map){
        if(map.get(key+1)){
            longest= Math.max(longest,val+map.get(key+1))
        }
    }
    return longest

};