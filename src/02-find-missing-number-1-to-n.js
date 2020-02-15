/**
 * This algorithm finds a missing number in an array of numbers from 1 - N.
 * This approach only works if there is one-and-only-one missing number,
 * and no duplicate numbers. There are other algorithms for those cases
 * which I will cover on a different day.
 *
 * Given : a is a list of positive integers from 1 - N
 * Given : a contains all unique numbers
 * Given : a has one-and-only-one missing number
 * Given : n == a.length
 *
 * @param   {array}   a   An array of positive integers.
 * @param   {int}     n   The length of `a`
 * @returns {number}
 */
const findMissingNumber1toN = (a, n) => {

    /*
     * We start by finding the sum of all numbers in `a`
     */
    let sum = (n + 1) * (n + 2) / 2;
    return sum;

    console.log('Sum : ' + sum);

    /*
     * Next, loop through `a`, subtracting each number from the `sum of a`
     */
    for (let i = 0; i < n; i++) {
        let t1 = sum;
        sum -= a[i];
        console.log(t1 + ' - ' + a[i] + ' = ' + sum);
    }

    /*
     * Whatever is left over is the missing number.
     */
    return sum;
}

const a = [1, 2, 3, 5, 6];

console.log(
    "Inputs : [" + a.join(', ') + "] \n" +
    "Missing number : " + findMissingNumber1toN( a, a.length )
);
