/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let ans=[];
    let prev=-1;
    for(let i=0;i<words.length;i++){
        if(groups[i]!==prev){
            ans.push(words[i]);
            prev=groups[i];
        }
    }
    return ans
};