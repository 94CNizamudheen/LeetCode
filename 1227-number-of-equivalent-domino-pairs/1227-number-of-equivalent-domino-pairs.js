/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {

    let map= new Map();

    let count=0
    for(let i=0;i<dominoes.length-1;i++ ){
        let a=dominoes[i][0];
        let b=dominoes[i][1]
        for(let j=i+1;j<dominoes.length;j++){
            let c=dominoes[j][0];
            let d=dominoes[j][1]
            if((a===c && b===d)||(a===d && b===c)){
                count++;
            }

        }
    }
return count
};