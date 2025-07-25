/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted= score.map((i)=>i).sort((a,b)=>b-a);
    let result=[];
    for(let i=0;i<score.length;i++){
        let pos= sorted.indexOf(score[i]);
        if(pos==0){
            result.push("Gold Medal")
        }else if(pos==1){
            result.push("Silver Medal")
        }else if(pos==2){
            result.push("Bronze Medal")
        }else{
            result.push(String(pos+1))
        }
    }
    return result
};