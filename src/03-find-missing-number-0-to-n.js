/**
 * Find missing number in a limited range array [1..n+1].
 * This is a variation of Day 02's algorithm. Here we find
 * the missing number in an array from 0 - N :
 *
 * Given : a = an array of unique integers from 0 - N.
 * Given : a contains one-and-only-one missing number.
 *
 * @param   {array}   nums
 * @returns {number}
 */
var missingNumber0toN = function(a) {

    let n   = a.length - 1;
    let sum = a.reduce((a, v) => a + v);
    return (n + 1 ) * (n + 2) / 2 - sum;
};

var a = [0, 3, 2, 4, 6, 1];

log(
    "Inputs : [" + a.join(', ') + "] \n" +
    "Missing number : " + missingNumber0toN(a)
);