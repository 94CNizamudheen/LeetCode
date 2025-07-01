/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count=1;
    for(let i=0;i<word.length-1;i++){
        let j=i+1

       if(word[i]==word[j]){
        count++;
        j++
       }
    }
 return count
};