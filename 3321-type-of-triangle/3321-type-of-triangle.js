/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let a= nums[0]
    let b= nums[1]
    let c= nums[2]
    let set= new Set(nums);
    if(set.size==1) return "equilateral";
    if (a+b<=c || a+c<=b|| b+c<=a) return "none";
    if(a==b||b==c||c==a) return "isosceles"
    return "scalene"

    
};