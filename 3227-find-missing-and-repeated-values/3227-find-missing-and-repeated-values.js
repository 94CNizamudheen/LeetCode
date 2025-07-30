/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr= grid.flat().sort((a,b)=>a-b);
    let res=[]
    let n= arr.length;
    let map= new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])||0)+1);
    }
    for (let i=1;i<=n;i++){
        if(!map.has(i)){
            res[1]=i
        }else if(map.has(i) && map.get(i)>1){
            res[0]=i
        }

    }
    return res
};