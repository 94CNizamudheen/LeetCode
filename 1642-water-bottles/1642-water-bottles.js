/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drinkable= numBottles;
    while(numBottles >= numExchange){
        let canDrink= Math.floor(numBottles/numExchange);
        let emptyBottles = numBottles-(canDrink*numExchange);
        drinkable+= canDrink;
        numBottles= canDrink+emptyBottles
    };
    return drinkable
};