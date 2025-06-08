/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    let counts= new Map();
    for(let char of s){
        counts.set(char,(counts.get(char)||0)+1)
    };
    let sorted= Array.from(counts.values()).sort((a,b)=>a-b)
    let d= (counts.size-k)
    if(d<=0){
        return 0
    } else{
        let sum=0
        for(let i=0;i<d;i++){
            sum+=sorted[i];
        }
        return sum
    }
};