/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let sorted1= arr.sort((a,b)=>a-b)
    let sorted2= target.sort((a,b)=>a-b)
    for(let i=0;i<sorted1.length;i++){
        if(sorted1[i]!==sorted2[i]){
            return false;
        }
    }
    return true
};