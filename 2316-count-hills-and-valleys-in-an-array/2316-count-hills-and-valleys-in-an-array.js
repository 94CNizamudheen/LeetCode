/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    
    let count=0;

    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]) continue;
        let left= i-1;
        while(left>=0 &&nums[i]===nums[left]){
            left--;
        }
        let right= i+1;
        while(right<=nums.length && nums[i]===nums[right]){
            right++;
        }
        console.log(left,right)
        if(left>=0 && right<=nums.length){
            if(nums[i]<nums[right] && nums[i]<nums[left]){
                count++;
            }
            if(nums[i]>nums[right] && nums[i]>nums[left]){
                count++;
            }
        }
    }
        return count
}; 