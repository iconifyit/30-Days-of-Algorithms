/**
 * Insertion sort algorithm.
 * @param arr
 */
const insertionSort = ( arr ) => {

    /*
     * Start from the second element
     * (element at index 0 is already sorted)
     */

    for (let i = 1; i < arr.length; i++) {

        let value = arr[i];
        let j = i;

        /*
         * Find the index j within the sorted subset arr[0..i-1]
         * where element arr[i] belongs
         */

        while (j > 0 && arr[j - 1] > value) {
            arr[j] = arr[j - 1];
            j--;
        }

        /*
         * Note that sub-array arr[j..i-1] is shifted to
         * the right by one position i.e. arr[j+1..i]
         */

        arr[j] = value;
    }
}

const main = (args) => {

    var arr = [ 3, 8, 5, 4, 1, 9, -2 ];

    insertionSort(arr);

    console.log( arr );
}

main();