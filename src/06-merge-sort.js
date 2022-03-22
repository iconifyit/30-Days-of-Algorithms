/*
Merge Sort is a stable sort which means that the same element in an array
maintain their original positions with respect to each other. Overall time
complexity of Merge sort is O(n Log n). It is more efficient as it is in
worst case also the runtime is O(n log n) The space complexity of Merge
sort is O(n).
 */
/**
 * Recursively split, sort, and re-merge the array.
 * @param unsortedArray
 * @returns {*[]|*}
 *
 * Big-O:
 *
 * Space complexity : O(n)
 * Time complexity  : O(n Log n)
 */
const mergeSort = (unsortedArray) => {

    /*
     * (1) If there is only one item, it's already sorted :-)
     */

    if (unsortedArray.length <= 1) return unsortedArray;

    /*
     * (2) Determine the mid-point of the dataset to divide & conquer.
     */

    const middle = Math.floor(unsortedArray.length / 2);

    /*
     * (3) Split the array into left & right halves.
     */

    const
        left  = unsortedArray.slice(0, middle),
        right = unsortedArray.slice(middle);

    /*
     * (4) Recursively merge the halves.
     */

    return merge(
        mergeSort(left), mergeSort(right)
    );
}

/**
 * Merge the two arrays: left and right
 * @param   {array}     left
 * @param   {array}     right
 * @returns {*[]}
 */
const merge = (left, right) => {

    let sorted = [],
        li = 0,
        ri = 0;

    /*
     * We will concatenate values into the resultArray in order
     */

    while (li < left.length && ri < right.length) {
        if (left[li] < right[ri]) {
            sorted.push(left[li]);
            li++;
        }
        else {
            sorted.push(right[ri]);
            ri++;
        }
    }

    /*
     * We need to concat here because there will be one element remaining
     * from either left OR the right
     */

    return sorted
        .concat(left.slice(li))
        .concat(right.slice(ri));
}

var numbers = [
    62, 52, 88, 51, 26, 40, 13, 44,
    83, 30, 10, 31, 99, 79, 81, 45,
    33, 97, 17, 96, 38, 50, 39, 22,
    47, 61, 20, 85, 75, 16, 15, 95,
    11, 71, 21, 86, 24, 28, 46, 5,
    89, 54, 70, 87, 35, 42, 69, 82,
    84, 76, 60, 98, 77, 68, 8, 66,
    96, 78, 90
];

console.log(
    mergeSort( numbers )
);