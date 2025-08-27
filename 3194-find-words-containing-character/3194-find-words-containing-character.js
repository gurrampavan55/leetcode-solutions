/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    let count=0
    for ( let word of words){
        if(word.includes(x)){
        
        arr.push(count)
        
    }
    count++
    }
    return arr
};