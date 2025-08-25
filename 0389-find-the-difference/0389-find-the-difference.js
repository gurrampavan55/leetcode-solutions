/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sumS=0;
    let sumT=0
    for(let ch of s){
        sumS+=ch.charCodeAt(0)
        
    }
    for(let ch of t){
        sumT+=ch.charCodeAt(0)
    }
    return String.fromCharCode(sumT-sumS)
};