/**
 * Find shared elements between two lists.
 * @param   {array} x
 * @param   {array} y
 * @returns {[]}
 */
const shared_items = (x, y) => {

    x.sort();
    y.sort();

    let i = 0,
        j = 0;

    const shared = [];

    while( i < x.length && j < y.length) {

        /*
         * If x[i] and y[j] are not equal, Increment
         * the appropriate counter and move on. We can
         * be confident that whichever item is "less than"
         * the other will not appear in the other list later
         * since we sorted the lists before starting the
         * comparison.
         */

        if      ( x[i] < y[j] ) i++;
        else if ( y[j] < x[i] ) j++;

        /*
         * If the i-th element from each list are equal,
         * push them onto the result (shared list).
         */

        else {
            shared.push(x[i]);
            i++;
            j++;
        }
    }
    return shared;
}

console.log( shared_items(
    ['red', 'blue', 'green', 'apple', 'cat', 'dog'],
    ['purple', 'black', 'pink', 'moose', 'cow', 'dog', 'cat']
));

/**
 * Finds the intersection of two arrays in a simple fashion.
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is
 *    n = MIN(a.length(), b.length())
 */
const list_intersection = (a, b) => {

    const result = [];

    let ai = 0,
        bi = 0;

    a.sort();
    b.sort();

    while( ai < a.length && bi < b.length ) {

        /*
         * If the i-th elements of a and b are not equal,
         * Increment the appropriate counter and move on.
         */

        if      (a[ai] < b[bi] ) { ai++; }
        else if (a[ai] > b[bi] ) { bi++; }

        /*
         * If the i-th element from each list are equal,
         * push them onto the result (shared list).
         */
        else  {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }

    return result;
}

console.log( list_intersection(
    ['red', 'blue', 'green', 'apple', 'cat', 'dog'],
    ['purple', 'black', 'pink', 'moose', 'cow', 'dog', 'cat']
))

/**
 * Destructively finds the intersection of two arrays in a simple fashion.
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *  State of input arrays is undefined when
 *  the function returns.  They should be
 *  (prolly) be dumped.
 *
 *  Should have O(n) operations, where n is
 *    n = MIN(a.length, b.length)
 *
 */
const intersection_destructive = (a, b) => {
    const result = [];

    a.sort();
    b.sort();

    while( a.length > 0 && b.length > 0 )
    {
        if      (a[0] < b[0] ){ a.shift(); }
        else if (a[0] > b[0] ){ b.shift(); }
        else /* they're equal */
        {
            result.push(a.shift());
            b.shift();
        }
    }

    return result;
}

console.log( intersection_destructive(
    ['red', 'blue', 'green', 'apple', 'cat', 'dog'],
    ['purple', 'black', 'pink', 'moose', 'cow', 'dog', 'cat']
))