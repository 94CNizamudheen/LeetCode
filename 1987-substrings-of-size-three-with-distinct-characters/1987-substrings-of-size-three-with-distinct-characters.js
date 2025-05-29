/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count=0
    for(let i=0;i<s.length-2;i++ ){
        let sub=s[i]+s[i+1]+s[i+2]
        let set= new Set(sub)
        if(set.size==3) count++

    }
    return count
    
};