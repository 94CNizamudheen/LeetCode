/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=new Set(['a', 'e', 'i', 'o', 'u',"A","E","I","O","U"]);  
    let left=0,right=s.length-1;
    let arr=s.split('');
    while(left<right){
        while(left<right && !vowels.has(arr[right])){
            right--
        }
        while(left<right && !vowels.has(arr[left])){
            left++
        }
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--
    } 
    return arr.join("")
};