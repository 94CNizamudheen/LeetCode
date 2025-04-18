/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1) return "1";

    let answer='1';;
    
    for(let i=2;i<=n;i++){
        let current="";
        let count=1;
        for(let j=1;j<answer.length;j++){
            if(answer[j]===answer[j-1]){
                count++;
            }else{
                current+= count+answer[j-1];
                count=1;
            }  
        }
        current+= count+ answer[answer.length-1];
        answer=current;
    }
    return answer
};