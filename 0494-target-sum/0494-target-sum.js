/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    let memo=new Map();

    const dfs=(index,sum)=>{    
        let key= `${index},${sum}`;
        if(memo.has(key)) return memo.get(key);
        if(nums.length===index){
            return sum===target ? 1 : 0;
        }
        const add= dfs(index+1 , sum+nums[index]);
        const sub= dfs(index+1 , sum-nums[index]);

        memo.set(key,add+sub);
        return add+sub

    }
    return dfs(0,0)
};