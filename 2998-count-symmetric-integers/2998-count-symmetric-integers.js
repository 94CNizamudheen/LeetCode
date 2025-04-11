/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count=0;
    for(let i=low;i<=high;i++){
        let num= i.toString();
        if(num.length%2===0){
            let half=num.length/2;
            let firstHalf= num.slice(0,half).split("").reduce((acc,val)=>Number(val)+acc,0);
            let secondHalf= num.slice(half).split("").reduce((acc,val)=>Number(val)+acc,0);
            if(firstHalf===secondHalf)count++;
        }
       
    }
     return count
};