/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase()
    let rev=""
    let filtered=""
    for(let char of s){
        if(char.match(/[a-z0-9]/)){
            filtered+=char
          rev=char+rev
        }
    }
    return rev===filtered
};