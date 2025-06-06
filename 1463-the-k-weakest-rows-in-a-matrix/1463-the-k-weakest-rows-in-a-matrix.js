/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let countArr=[];
    for(let i=0;i<mat.length;i++){
        let count=0
        for(let element of mat[i]){
            if(element===1) count++
            else break;
        }
        countArr.push([count,i])
    }
    countArr.sort((a,b)=>{
        if(a[0]==b[0]){
            return a[1]-b[1]
        }else{
             return a[0]-b[0]
        }
    })
    return countArr.splice(0,k).map(item=>item[1])
    
};