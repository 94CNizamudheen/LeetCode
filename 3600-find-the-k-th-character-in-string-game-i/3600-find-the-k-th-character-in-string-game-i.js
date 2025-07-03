/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let str= 'a'
    let charcode= str.charCodeAt(str.length-1)
    while(k>str.length){
        let next=''
        for(let i=0;i<str.length;i++){
            let char= str[i]
            let nextChar= (char==='z')? "a" : String.fromCharCode(char.charCodeAt(0)+1);
            next+=nextChar
        }
        str+=next
    }
    
    return str[k-1]
};