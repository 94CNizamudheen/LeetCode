/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    while(s.length%k!==0){
        s+=fill
    }
    let groups=[];
    let splited=s.split('')
    while(splited.length){
        groups.push(splited.splice(0,k).join(''));
    }
    return groups
};