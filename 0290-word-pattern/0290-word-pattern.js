/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordmap=new Map();
    let charmap= new Map();
    let words= s.split(" ");
    if (words.length!==pattern.length) return false
    for(let i=0;i<words.length;i++){
        let char= pattern[i];
        let word=words[i];
        if(!wordmap.has(word)){
            wordmap.set(word,char)
        }else if(wordmap.get(word)!==char){
            return false
        }
         if(!charmap.has(char)){
            charmap.set(char,word)
        }else if(charmap.get(char)!==word){
            return false
        }
    }
    return true
};