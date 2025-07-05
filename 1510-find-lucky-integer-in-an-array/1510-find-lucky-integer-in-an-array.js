/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq= new Map();
    for(let i of arr){
        freq.set(i,(freq.get(i)||0)+1);
    }
    let largeLucky= -1;
    for(let [key,val] of freq){
        if(key==val){
             largeLucky= Math.max(largeLucky,val)
        }
       
    }
    return largeLucky;
};