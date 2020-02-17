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