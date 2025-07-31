/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    
    let whiteCount= 0;
    for(let i=0;i<k;i++){
        if(blocks[i]==="W") whiteCount++;
    };
    let minOperation=whiteCount;
    for(let i=k;i<blocks.length;i++){
        if(blocks[i-k]==="W") whiteCount--;
        if(blocks[i]==="W") whiteCount++;
        minOperation= Math.min(minOperation,whiteCount)
    }
    return minOperation
};