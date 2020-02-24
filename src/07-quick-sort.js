/**
 * Partitions array into halves.
 * @param items
 * @param left
 * @param right
 * @returns {*}
 */
const partition = (items, left, right) => {

    let pivot = items[ Math.floor( (right + left) / 2 ) ];

    /*
     * As long as the current number on the left,
     * is less than the number on the right,
     * move our two cursors closer to the pivot.
     */
    while ( left <= right ) {

        /*
         * Current item on the left is less than the pivot.
         * Move the lefthand cursor one position to
         * the right until left is not longer less
         * than right.
         */
        while ( items[left] < pivot ) left++;

        /*
         * Current item on the right is greater than
         * the pivot, move the righthand cursor toward
         * the left until this is no longer true.
         */
        while ( items[right] > pivot ) right--;

        /*
         * If we reach a situation where the number on the left
         * is greater than the number on the right, but the cursors
         * lefthand cursor is less than the righthand cursor,
         * we need to swap the positions of the values.
         */
        if ( left <= right ) {
            [ items[left], items[right] ] = [ items[right], items[left] ];
            left++;
            right--;
        }
    }
    return left;
}

/**
 * Performs the sort.
 * @param items
 * @param left
 * @param right
 * @returns {*}
 */
const quickSort = (items, left, right) => {

    let pivot;

    if (items.length <= 1) return items;

    /*
     * index returned from partition
     */
    pivot = partition(items, left, right);

    /*
     * more elements on the left side of the pivot
     */
    if (left < pivot - 1) quickSort(items, left, pivot - 1);

    /*
     * more elements on the right side of the pivot
     */
    if (pivot < right) quickSort(items, pivot, right);

    return items;
}

// first call to quick sort

var items = [
    62, 52, 88, 51, 26, 40, 13, 44,
    83, 30, 10, 31, 99, 79, 81, 45,
    33, 97, 17, 96, 38, 50, 39, 22,
    47, 61, 20, 85, 75, 16, 15, 95,
    11, 71, 21, 86, 24, 28, 46, 5,
    89, 54, 70, 87, 35, 42, 69, 82,
    84, 76, 60, 98, 77, 68, 8,  66,
    96, 78, 90
];

console.log(
    quickSort(items, 0, items.length - 1)
);
