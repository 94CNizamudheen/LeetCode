/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {

    let set= new Set
    for(let i=0;i<digits.length;i++){
        for(let j=0;j<digits.length;j++){
            for(let k=0;k<digits.length;k++){
                if(i!==j && k!==j&& i!==k){
                    if(digits[i]!==0 && digits[k]%2==0){
                        let digit=Number((String(digits[i])+String(digits[j])+String(digits[k]))) 
                        if(!set.has(digit)) set.add(digit)
                    }
                }
            }
        }
    }
    return set.size
};