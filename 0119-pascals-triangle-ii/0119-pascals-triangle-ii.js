/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    let row= new Array(rowIndex+1).fill(1)
    for(let i=0;i<=rowIndex;i++){
        for(let j=i-1;j>0;j--){
            row[j]= row[j]+row[j-1];
        }
    }
    return row
};