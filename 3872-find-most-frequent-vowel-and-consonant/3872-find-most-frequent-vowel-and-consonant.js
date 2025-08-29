/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = new Map();

    // Count frequency of each character
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let max_vowel = 0;
    let max_consonant = 0;

    // Iterate over map entries
    for (let [char, freq] of map) {
        if (vowels.has(char)) {
            max_vowel = Math.max(max_vowel, freq);
        } else {
            max_consonant = Math.max(max_consonant, freq);
        }
    }

    return max_vowel + max_consonant;
};
