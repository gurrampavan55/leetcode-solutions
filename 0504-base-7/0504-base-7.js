/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return "0";

    let isNegative = num < 0;
    num = Math.abs(num);

    let op = "";
    while (num > 0) {
        let rem = num % 7;
        op = rem + op;  // prepend remainder
        num = Math.floor(num / 7);
    }

    return isNegative ? "-" + op : op;
};
