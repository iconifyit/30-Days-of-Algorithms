/**
 * Alternate, all-in-one quickSort algorithm.
 * O(log n) Big-O notation
 * @param arr
 * @param low
 * @param high
 * @returns {*}
 */
const quickSort = (arr, low, high) => {

    if (arr.length <= 1) return arr;

    /* pi is partitioning index, arr[pi] is now
           at right place */

    let pi = ((items, left, right) => {

        let pivot = items[ Math.floor( (right + left) / 2 ) ];

        while ( left <= right ) {

            while ( items[left] < pivot ) left++;
            while ( items[right] > pivot ) right--;

            if ( left <= right ) {
                [ items[left], items[right] ] = [ items[right], items[left] ];
                left++;
                right--;
            }
        }
        return left;

    })( arr, low, high );

    if (low < pi - 1) quickSort( arr, low, pi - 1 );  // Before pi
    if (pi < high)    quickSort( arr, pi, high );     // After pi

}

const items = [
    62, 52, 88, 51, 26, 40, 13, 44,
    83, 30, 10, 31, 99, 79, 81, 45,
    33, 97, 17, 96, 38, 50, 39, 22,
    47, 61, 20, 85, 75, 16, 15, 95,
    11, 71, 21, 86, 24, 28, 46, 5,
    89, 54, 70, 87, 35, 42, 69, 82,
    84, 76, 60, 98, 77, 68, 8,  66,
    96, 78, 90
];

quickSort(items, 0, items.length - 1)

console.log( items );