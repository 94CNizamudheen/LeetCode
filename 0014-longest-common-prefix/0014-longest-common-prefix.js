/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   
   let ans=[];

    for(let i=0; i<strs[0].length;i++){
        let char=strs[0][i];
        for(let j=1;j<strs.length;j++){
            if(i>=strs[j].length || char!==strs[j][i]){
                return ans.join('');
            }
        }
          ans.push(char)
    }
    return ans.join("")
    
};