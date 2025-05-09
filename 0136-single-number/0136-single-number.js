/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq= new Map();
    for(let num of nums){
        freq.set(num,(freq.get(num)||0)+1)
    };
    for(let [key,val] of freq){
        if(val===1){
            return key
        }
    }

};