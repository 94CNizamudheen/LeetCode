/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words= text.split(' ');
    let set= new Set(brokenLetters.split('')) 
    console.log(set)
    let count=0
    for(let word of words){
        for(let char of word){
            if(set.has(char)){
                count++;
                break;
            }
            
        }
    }
    return words.length-count
};