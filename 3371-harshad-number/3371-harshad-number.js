/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum=  x.toString().split('').reduce((acc,val)=>Number(val)+acc,0);
    return x%sum==0 ? sum : -1;
};