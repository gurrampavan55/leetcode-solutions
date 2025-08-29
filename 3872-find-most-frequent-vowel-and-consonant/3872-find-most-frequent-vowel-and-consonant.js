/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map=new Map();
    for(let char of s){
        map[char]=!map[char]?1:++map[char];
    }
    let vowels=['a','e','i','o','u'];
    let max_vowel=0;
    let max_consonant=0;
    for(let char of s){
        if(vowels.includes(char)){
           max_vowel=Math.max(map[char],max_vowel)
        }
        else{
            max_consonant=Math.max(map[char],max_consonant)
        }
    }
    return max_vowel+max_consonant
};