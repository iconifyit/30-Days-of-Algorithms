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
            if (x[i] < x[i+1]) {
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


var a = [9,6,4,2,3,5,7,0,1];

console.log(
    "Inputs : [ " + a.join(', ') + " ] \n" +
    "Sorted : [ " + bubble_sort(a).join(', ') + " ]"
);