/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }else{
            count=0
        }
        if(count===3) break;
    }
   return (count===3) ? true : false;
};