/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let one=new Map();

    let two=new Map();
    for (let char of s){
        one.set(char,(one.get(char)||0)+1);
       
    }
    for (let char of t){
        if(!one.has(char)){
        return false
        }
       one.set(char,(one.get(char)-1));

       if(one.get(char)===0){
        one.delete(char)
       }

    }

    return one.size===0
};