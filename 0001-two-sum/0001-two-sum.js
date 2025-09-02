/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap={}
    for(let i=0;i<nums.length;i++){
        comp=target-nums[i]
        if(comp in hashmap){
            return [hashmap[comp],i]
        }
        hashmap[nums[i]]=i

    }
    
};