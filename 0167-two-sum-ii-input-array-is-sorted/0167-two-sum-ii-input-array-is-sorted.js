/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    while(i<j){
        let su=numbers[i]+numbers[j]
        if(su>target){
            --j
        }else if(su<target){
            ++i
        }else{
            return [i+1,j+1]
        }
   

    }
     return [-1]
};