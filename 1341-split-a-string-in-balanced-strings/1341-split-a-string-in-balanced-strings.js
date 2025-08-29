/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let R_count=0;
    let L_count=0;
    let count=0;

    for(let char of s){
        if(char==='R'){
            R_count=R_count+1;
        }
        if(char==='L'){
            L_count=L_count+1;
        }
        if(R_count!=0 && (R_count===L_count)){
            count=count+1;

        }
    }
    return count
    
};