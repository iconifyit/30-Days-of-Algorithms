/**
 * Euclid's algorithm for Greatest Common Divisor.
 * @param {int} m
 * @param {int} n
 * @returns {string|number}
 *
 * Given : 0 < n < m
 * Given : m / n = r
 *
 * 1. Divide m by n. If the remainder is 0, GCD is n.
 * 2. m <-- n, n <-- r
 * 3. Repeat until r == 0
 *
 * Big-O : O(log(min(x,y)))
 */
const euclidsAlgorithm = (m, n) => {

    /*
     * If `m` or `n` is not a positive integer, the test is invalid.
     */
    if (m <= 0 || n <= 0) return '`m` and `n` must be positive integers';

    /*
     * If n > m, swap the numbers.
     */
    [m, n] = n > m ? [n, m] : [m, n] ;

    /*
     * Divide m by n = r
     * m <-- n, n <-- r until r == 0
     */
    while(true) {
        if (m % n === 0) return n;
        [m, n] = [n, m % n];
    }
};

var m = 16,
    n = 8;

console.log( `GCD of ${m} & ${n} is : ` + euclidsAlgorithm(m, n) );