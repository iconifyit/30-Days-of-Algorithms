/**
 * Merge Sort Implentation (Recursion)
 * @param unsortedArray
 * @returns {*[]|*}
 */
const mergeSort = (unsortedArray) => {

    // No need to sort the array if the array only has one element or empty

    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left  = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
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

console.log(
    mergeSort( [10, -1, 2, 5, 0, 6, 4, -5] )
);