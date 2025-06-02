/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let charMap= new Map();
    for(let i=1;i<=26;i++){
        charMap.set()
    }
    let answer='';
    for(let i =0;i<s.length;i++){
        if(s[i+2]=="#"){
            let number= Number(s[i]+s[i+1])
            answer+= String.fromCharCode(96+number)
            i+=2;
        }else{
            let number=Number(s[i])
            answer+=String.fromCharCode(96+number)
        }
    }
    return answer
};