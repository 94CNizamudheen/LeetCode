/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let str= num.toString()
    let min= Infinity
    let max= -Infinity

    for(let i=0;i<=9;i++){
       for(let j=0;j<=9;j++){
            let newStr= str.split('').map((c)=>c===i.toString()? j.toString(): c).join('');
            let newNum= parseInt(newStr);
            max= Math.max(max,newNum);
            min= Math.min(min,newNum)
       }
    }
   return max-min
};