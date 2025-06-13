/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    let bolArr= new Array(s.length+1).fill(false);
    bolArr[0]=true;
    for(let i=1;i<=s.length;i++){
       
        for(let j=0;j<i;j++){
           if(bolArr[j] && set.has(s.substring(j,i))){
            bolArr[i]=true
            break
           }
        }
    }
   return bolArr[s.length]
};