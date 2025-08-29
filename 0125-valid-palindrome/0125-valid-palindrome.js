/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase()
    let alph=["q","w","e","r","t","y","u","i","o","p","a",'s',"d","f","g","h","j","k","l","z","x","v","b","n","m","c","1","2","3","4","5","6","7","8","9","0"];
    let word='';
    for(let char of s){
        if(alph.includes(char)){
            word+=char;
        }
    }
    
    let rev='';
    for(let i=word.length-1;i>=0;i--){
        rev+=word[i];
    }
    console.log(word,rev)
    return word===rev
};