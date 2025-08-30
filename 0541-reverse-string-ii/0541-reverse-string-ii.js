/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s=s.split("")
    let le=s.length;
    for(let j=0;j<le;j+=2*k){
        let mid=Math.floor(k/2)
        for(let i=0;i<mid;i++){
            [s[j+i],s[j+k-i-1]]=[s[j+k-i-1],s[j+i]]
        }
    }
    s=s.join("")
    return s
};