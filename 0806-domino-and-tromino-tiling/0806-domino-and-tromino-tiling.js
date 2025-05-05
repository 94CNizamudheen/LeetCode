/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let mod= 1e9+7;
    if(n==1)return 1
    if(n==2)return 2
    let arr = new Array(n+1).fill(0);
    arr[0]=1;
    arr[1]=1;
    arr[2]=2;

    for(let i=3;i<=n;i++){
        arr[i]=(2*arr[i-1]+arr[i-3])%mod
    }
    return arr[n]
};