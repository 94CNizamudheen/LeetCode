/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if(start>destination){
        [start,destination]= [destination,start];
    }
    let total=0;
    let forword= 0;
    for(let i=0;i<distance.length;i++){
        total+=distance[i];
        if( i >=start && i<destination ){
            forword+=distance[i]
        }
    }
    let backword= total-forword
    return Math.min(forword,backword)
};