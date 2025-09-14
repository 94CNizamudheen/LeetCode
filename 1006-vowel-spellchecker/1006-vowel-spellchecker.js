/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exactSet= new Set(wordlist)
    const capMap= new Map();
    const vowelMap= new Map()
    const ans=[]
    for(let word of wordlist){
        const lowerword= word.toLowerCase();
        const de= devowel(word);
        if(!capMap.has(lowerword)) capMap.set(lowerword,word)
        if(!vowelMap.has(de)) vowelMap.set(de,word)
    }
    for(let q of queries){
        if(exactSet.has(q)){
            ans.push(q)
        }else if(capMap.has(q.toLowerCase())){
            ans.push(capMap.get(q.toLowerCase()))
        }else if(vowelMap.has(devowel(q))){
            ans.push(vowelMap.get(devowel(q)))
        }else{
            ans.push('')
        }
    }
    return ans
};
function devowel(word){
    return word.toLowerCase().replace(/[aeiou]/g,'*')
}