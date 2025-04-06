/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let a= x.toString().split("").reverse()
   let b= x.toString().split("")
   for(let i=0;i<a.length;i++){
    if(a[i]!==b[i]){
        return false;
        break;
    }
   }
    return true;
};