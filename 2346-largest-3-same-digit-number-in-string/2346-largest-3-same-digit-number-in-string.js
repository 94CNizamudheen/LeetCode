/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let ans='';
    for(let i=0;i<=num.length-3;i++){
        if(num[i]===num[i+1] && num[i+1]===num[i+2]){
            let good= num[i]+num[i+1]+num[i+2];
            ans= Math.max(ans,good)
        }

    }
    return (ans=="0") ? "000" : ans.toString();
};