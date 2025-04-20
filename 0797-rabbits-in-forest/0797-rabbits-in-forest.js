/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    totalRabits=0;
    let groupmap= new Map();
    for(let ans of answers ){
        groupmap.set(ans,(groupmap.get(ans)||0)+1);
    };
    for(let [ans,freq] of groupmap){
        let groupsize =ans+1;
        let needed= Math.ceil(freq/groupsize)
        totalRabits+=(needed*groupsize)
    }
    return totalRabits
};