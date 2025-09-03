/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersections=new Set();
    for(let num of nums1){
        if(nums2.includes(num)) intersections.add(num)
    }
    return Array.from(intersections)
};