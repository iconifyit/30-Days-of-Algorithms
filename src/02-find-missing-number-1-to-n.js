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
 * @see https://www.geeksforgeeks.org/find-the-missing-number/
 */
const findMissingNumber1toN = (a, n) => {

    /*
     * Calculate the sum of all numbers in the array.
     */
    let sum = a.reduce((a, v) => a + v);

    /*
     * Now calculate the maximum sum the array /could/ have with the missing
     * number included then subtract the original sum. The result is the
     * missing number.
     */
    return (n + 1) * (n + 2) / 2 - sum;
}

const a = [1, 2, 3, 5, 6];

console.log(
    "Inputs : [" + a.join(', ') + "] \n" +
    "Missing number : " + findMissingNumber1toN( a, a.length )
);
