/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let double= (s+s).slice(1,-1);
    return double.includes(s)

};