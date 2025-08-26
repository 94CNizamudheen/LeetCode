/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal=0;
    let maxArea= 0;
    dimensions.forEach(([ length , width ])=>{
        let diagonal=Math.sqrt(length*length + width*width );
        let area= length * width ;
        if(diagonal>maxDiagonal || (diagonal===maxDiagonal && area>maxArea)){
            maxDiagonal=diagonal;
            maxArea= area;
        }
    })
    return maxArea;
};