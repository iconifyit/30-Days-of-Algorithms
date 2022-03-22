/**
 * Bubble sort.
 * @param a
 * @returns {*}
 *
 * Big-O : O(n2)
 *
 * From wikipedia:
 *      Bubble sort has a worst-case and average complexity of О(n2), where n is the number of
 *      items being sorted. Most practical sorting algorithms have substantially better worst-case
 *      or average complexity, often O(n log n). Even other О(n2) sorting algorithms, such as
 *      insertion sort, generally run faster than bubble sort, and are no more complex.
 *      Therefore, bubble sort is not a practical sorting algorithm.
 */
const bubble_sort = (a) => {

    let swap = true,
        n = a.length-1,
        x = a;

    while (swap) {
        swap = false;
        for (let i = 0; i < n; i++) {
            if (x[i] > x[i+1]) {
                /*
                 * We're just swapping the i & i + 1 items in the array
                 * without using a temp variable.
                 */
                [ x[i], x[i + 1] ] = [ x[i+1], x[i] ];
                swap = true;
            }
        }
        n--;
    }
    return x;
}


var a = [
    62, 52, 88, 51, 26, 40, 13, 44,
    83, 30, 10, 31, 99, 79, 81, 45,
    33, 97, 17, 96, 38, 50, 39, 22,
    47, 61, 20, 85, 10, 16, 15, 95,
    11, 71, 21, 86, 24, 28, 46, 5,
    89, 54, 70, 87, 35, 42, 69, 82,
    84, 76, 60, 98, 77, 68, 8,  66,
    96, 78, 90, 75
];

console.log(
    "Inputs : [ " + a.join(', ') + " ] \n" +
    "Sorted : [ " + bubble_sort(a).join(', ') + " ]"
);