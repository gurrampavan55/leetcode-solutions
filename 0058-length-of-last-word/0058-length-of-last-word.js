/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim()
    let split=s.split(" ")
    let le=split.length
    let lastword=split[le-1].length

    return lastword
    
};