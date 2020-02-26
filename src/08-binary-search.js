/*
 * Iterative search.
 * Big-O = O(logN)
 */
const binarySearch = (haystack, needle) => {

    let start = 0,
        end   = haystack.length - 1;

    /*
     * While the start index is
     * less than the end index.
     */
    while (start <= end) {

        /*
         * Find the middle index.
         */
        let mid = Math.floor( (start + end) / 2 );

        /*
         * If the middle element matches the search,
         * we're done. Return the middle item.
         */
        if (haystack[mid] === needle) return mid;

        /*
         * Else look in left or right half accordingly
         */
        if (haystack[mid] < needle) start = mid + 1;
        else end = mid - 1;

    }
    return -1;
}

// ==============================================================================
// ==================================== Test ====================================
// ==============================================================================

const items = [
    62, 52, 88, 51, 26, 40, 13, 44,
    83, 30, 10, 31, 99, 79, 81, 45,
    33, 97, 17, 96, 38, 50, 39, 22,
    47, 61, 20, 85, 10, 16, 15, 95,
    11, 71, 21, 86, 24, 28, 46, 5,
    89, 54, 70, 87, 35, 42, 69, 82,
    84, 76, 60, 98, 77, 68, 8,  66,
    96, 78, 90, 75
].sort();

const needle = 85;

const result = binarySearch(
    items,
    needle
);

console.log(`Element found at ${result}`);