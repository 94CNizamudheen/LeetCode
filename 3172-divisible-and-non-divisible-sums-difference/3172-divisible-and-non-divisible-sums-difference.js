/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let i=1
    let num1=0,num2=0;
    while(i<=n){
        (i%m!==0)? num1+=i : num2+=i
        i++
    }
    return num1-num2
};