/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let obj={")":"(","]":"[","}":"{"};
    for(let char of s){
        if(char in obj){
            if(stack.length===0 || stack[stack.length-1]!==obj[char]){
                return false
            }
            else{
                stack.pop()
            }
        }
        else{
            stack.push(char)
        }
    }
    return stack.length===0
    
};