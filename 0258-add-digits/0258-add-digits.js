/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numbers= num.toString().split('')
    while(numbers.length>1){
        let sum= numbers.reduce((acc,val)=>acc+Number(val),0)
        numbers= sum.toString().split('')
    }
   return Number(numbers[0])
    
};