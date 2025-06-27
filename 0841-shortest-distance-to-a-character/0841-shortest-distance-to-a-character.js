/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {

    let result=[]
    let prev=-Infinity;
    for(let i=0;i<s.length;i++){
        if(s[i]===c){
             prev=i
          }
        result.push(Math.abs(i-prev))
        
    }
    prev=Infinity
    for(let i=s.length-1;i>=0;i--){
        if(s[i]==c){
            prev=i;
        }
        result[i]= Math.min(result[i],Math.abs(prev-i))
    }
    return result
}
