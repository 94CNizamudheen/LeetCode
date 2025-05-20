/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set= new Set();
    while(!set.has(n) && n!==1){
        set.add(n)
        n = n.toString().split('').reduce((acc,val)=>{
            let digit= Number(val);
            return acc+ digit*digit;
        },0); 
        
    }
    return n===1
};