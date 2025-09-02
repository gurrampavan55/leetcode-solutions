/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let slow=0;
    for(let i=0;i<t.length;i++){
        if(s[slow]===t[i]){
            slow+=1
        }

    }
    return slow===s.length
    
};