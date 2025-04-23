/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let sumGroup=new Map();
    let count=0;
    for(let i=1;i<=n;i++){
        let str=i.toString();
        let sum=0;
        for(let char of str){
            sum+=Number(char);
        }
        if(sumGroup.has(sum)){
            sumGroup.set(sum,(sumGroup.get(sum)||0)+1)
        }else{
             sumGroup.set(sum,1);
        }   
    }
    let max=-Infinity;
    for(let [num,key] of sumGroup){
        max= Math.max(max,key);
    };
    for(let [num,key] of sumGroup){
        if(key===max){
            count++;
        }
    }
    return count
};