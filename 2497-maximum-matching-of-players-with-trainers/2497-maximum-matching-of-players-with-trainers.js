/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    trainers.sort((a,b)=>a-b)
    players.sort((a,b)=>a-b)
    let count=0;
    let j=0,i=0;
    while(players.length>i && trainers.length>j){
        if(players[i]<=trainers[j]){
            count++;
            j++;
            i++;
        }else{
            j++
        }
    }
return count
};
