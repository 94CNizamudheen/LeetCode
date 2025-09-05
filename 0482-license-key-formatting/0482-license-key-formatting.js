/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str= s.replace(/-/g,'').toUpperCase();
    let res=[];
    for(let i=str.length;i>0;i-=k){
        let start= Math.max(0,i-k);
        res.push(str.slice(start,i))
    }
    return res.reverse().join('-')
};