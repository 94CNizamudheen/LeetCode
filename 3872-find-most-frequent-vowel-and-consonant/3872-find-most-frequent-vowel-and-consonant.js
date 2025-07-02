/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = new Map();
    let consonants = new Map();
    let vowelsMax=0;
    let consonantsMax=0;
    for(let char of s){
        if(char=="a"||char=="e"||char=="o"||char=="u"||char=="e"||char=="i"){
            vowels.set(char,(vowels.get(char)||0)+1);
        }else{
             consonants.set(char,(consonants.get(char)||0)+1);
        }
    }
    for(let [key,val] of vowels){
        vowelsMax= Math.max(val,vowelsMax)
    }
    for(let [key,val] of consonants){
        consonantsMax= Math.max(val,consonantsMax)
    }
    return consonantsMax+vowelsMax

};