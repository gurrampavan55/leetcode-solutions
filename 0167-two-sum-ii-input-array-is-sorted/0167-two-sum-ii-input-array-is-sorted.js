/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map={}
    for(let i=0;i<numbers.length;i++){
        comp=target-numbers[i]
        if(comp in map){
            return [map[comp]+1,i+1]
        }
        map[numbers[i]]=i
    }
    
};