/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let max= num;
  const digits= String(num).split('')
  if(!digits.includes('6')) return max
   for(let i=0;i<digits.length;i++ ){
    if(digits[i]=="6"){
        digits[i]="9";
        max= Math.max(max,Number(digits.join('')))
        digits[i]="6"
    } 
    
   }
   return max
};