/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let temp=[...arr];
    temp.sort((a,b)=>a-b);
    console.log(arr);
    console.log(temp);

    let ranks=[];
    let map= new Map();
      let rank=1;
    for(let element of temp){
        if(!map.has(element)){
            map.set(element,rank);
            rank++;
        }
    }

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            ranks.push(map.get(arr[i]))
        }
    }
    return ranks
};