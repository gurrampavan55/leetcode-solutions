/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    let Jset=new Set(jewels);
    for (let char of stones){
        if(Jset.has(char)){
           count++
        }
    }
    return count
};