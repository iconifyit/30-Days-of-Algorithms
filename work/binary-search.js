function binarySearch(items, left, right, needle)  {
    if (right >= left) {
        
        let mid = Math.ceil(left + (right - left) / 2);

        /*
         * If the middle element /is/ the needle, return its position.
         */
        if (items[mid] === needle) return mid;

        /*
         * If the element's value is less than the mid-point's value,
         * discard the right-hand (higher) sub-array.
         */
        if (items[mid] > needle) {
            return binarySearch(items, left, mid - 1, needle);
        }

        /*
         * Otherwise, the element is in the right-hand
         * sub-array, so discard the left-hand sub-array.
         */
        return binarySearch(items, mid + 1, right, needle);
    }

    /*
     * The element was not found if we made it here.
     */
    return -1;
}

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
    0,
    items.length - 1,
    needle
);

console.log(`Element found at ${result}`);