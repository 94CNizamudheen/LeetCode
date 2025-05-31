/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {

    const findNumeric=(word)=>{
        let numeric=""
        for(let i=0;i<word.length;i++){
             numeric+= (word.charCodeAt(i)-97 )
        }
        return Number(numeric)
    }
    
    return (findNumeric(firstWord)+findNumeric(secondWord)===findNumeric(targetWord))? true :false;
    
};