const nl = "\n";

const log = (message) => {
    console.log(nl + message + nl);
}

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

var m = 50,
    n = 20;

log( `GCD of ${m} & ${n} is : ` + euclidsAlgorithm(50, 20) );

/**
 * Find the missing number in an array of 1 - N.
 * @param a
 * @param n
 * @returns {number}
 */
// Use below formula for numbers not starting from 1
// S = (n / 2) * (2 * a + (n-1) * d)
// a = start number, n = length, d= difference -> 1 for consecutive numbers
const missingNumber1toN = (a, n) => {

    let total = (n + 1) * (n + 2) / 2;

    console.log(total);

    for (let i = 0; i < n; i++) {
        let t1 = total;
        total -= a[i];
        console.log(t1 + ' - ' + a[i] + ' = ' + total);
    }
    return total;
}

// Driver Code
var a = [1, 2, 3, 5, 6],
    n = a.length;


log(
    "Inputs : [" + a.join(', ') + "] \n" +
    "Missing number : " + missingNumber1toN( a, n )
);


/**
 * Find missing number in a limited range array [1..n+1]
 * @param {array}   nums
 * @returns {number}
 */
var missingNumber0toN = function(nums) {

    let n   = nums.length - 1;
    let sum = nums.reduce((a, v) => a + v);
    return (n + 1 ) * (n + 2) / 2 - sum;
};

var a = [0, 3, 2, 4, 6, 1];

log(
    "Inputs : [" + a.join(', ') + "] \n" +
    "Missing number : " + missingNumber0toN(a)
);

const bubble_sort = (a) => {
    var swap = true;
    var n = a.length-1;
    var x = a;

    while (swap) {
        swap = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i+1]) {
                var t = x[i];
                x[i] = x[i+1];
                x[i+1] = t;
                swap = true;
            }
        }
        n--;
    }
    return x;
}


var a = [9,6,4,2,3,5,7,0,1];

log(
    "Inputs : [ " + a.join(', ') + " ] \n" +
    "Sorted : [ " + bubble_sort(a).join(', ') + " ]"
);