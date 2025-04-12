/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let answer=[];
    for(let i=0;i<arr.length;i++){
        let a=(fn(arr[i],i));
        if(a){
            answer.push(arr[i]);
        }
    }
  return answer;
};