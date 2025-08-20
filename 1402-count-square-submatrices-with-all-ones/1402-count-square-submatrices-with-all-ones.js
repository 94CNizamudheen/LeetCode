/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
   let arr= Array.from({length:matrix.length},()=>Array(matrix[0].length).fill(0));
    let count=0
   for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if(matrix[i][j]===1){
            if(i===0 || j===0){
                arr[i][j]=1
            }else{
                arr[i][j]= 1+ Math.min(arr[i-1][j],arr[i-1][j-1],arr[i][j-1])
            }
            count+=arr[i][j]
        }
        
    }
   }
   return count
};