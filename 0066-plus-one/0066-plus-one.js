/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number= (BigInt(digits.join('')));
    let sum= number+ BigInt(1)
     return sum.toString().split('').map((num)=>Number(num))
};