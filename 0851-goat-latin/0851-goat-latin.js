/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels= ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O','U']
    let ans='';
    let arr= sentence.split(' ');
    for(let i=0;i<arr.length;i++){
        let word= arr[i].split('')
        if(vowels.includes(word[0])){
            word=word.join('')+'ma';


        }else{
            let first=word[0]
         let w=word.splice(1).join('')
         word= w+first+'ma';
        };
        let j=i+1;
        while(j>0){
            word+='a';
            j--
        } 
        ans+=word+' ';
    }
    return ans.trim()
};