/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters on the left
        while (left < right && !s[left].match(/[a-z0-9]/)) {
            left++;
        }
        // Skip non-alphanumeric characters on the right
        while (left < right && !s[right].match(/[a-z0-9]/)) {
            right--;
        }

        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// Example
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
