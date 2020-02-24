function merge_sort(m) {
    if (m.length <= 1) return m;

    var left  = [],
        right = [];

    m.forEach(function(x, i) {
        if (i < m.length / 2) {
            left.push(x);
        }
        else {
            right.push(x);
        }
    });

    left  = merge_sort(left);
    right = merge_sort(right);

    return merge(left, right);
}

/*
is
// Base case. A list of zero or one elements is sorted, by definition.
if length of m ≤ 1 then
return m

// Recursive case. First, divide the list into equal-sized sublists
// consisting of the first half and second half of the list.
// This assumes lists start at index 0.

var left := empty list
var right := empty list

for each x with index i in m do
    if i < (length of m)/2 then
        add x to left
    else
        add x to right

// Recursively sort both sublists.

left := merge_sort(left)
right := merge_sort(right)

// Then merge the now-sorted sublists.

return merge(left, right)

 */

/**
 * Merge Sort Implentation (Recursion)
 * @param unsortedArray
 * @returns {*[]|*}
 */
const mergeSort = (unsortedArray) => {

    /*
     * If there is only one item, it's already sorted :-)
     */

    if (unsortedArray.length <= 1) return unsortedArray;

    /*
     * Determine the mid-point of the dataset to divide & conquer.
     */

    const middle = Math.floor(unsortedArray.length / 2);

    /*
     * Split the array into left & right halves.
     */

    const left  = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    /*
     * Recursively merge the halves.
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