/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total=nums.length;
    let totalSum=(total*(total+1))/2

    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    
    return totalSum-sum
};