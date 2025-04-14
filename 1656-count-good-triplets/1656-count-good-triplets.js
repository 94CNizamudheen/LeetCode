/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                let x1=Math.abs(arr[i]-arr[j]);
                let x2=Math.abs(arr[j]-arr[k]);
                let x3=Math.abs(arr[i]-arr[k]);
                if(x1<=a && x2<=b && x3 <= c){
                    count++
                }
            }
        }
    }
    return count
};