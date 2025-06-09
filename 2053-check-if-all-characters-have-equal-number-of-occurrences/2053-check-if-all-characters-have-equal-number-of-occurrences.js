/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let count={}
    for(let char of s){
        count[char]=((count[char]||0)+1);
    };
    let values= Object.values(count)
    let set= new Set(values);
    return (set.size===1) ? true : false

};