/**
 * Unflattens an array to a tree with runtime O(n)
 *
 * This algorithm was taken from Philip Stanislaus's "Performant Array to Tree"
 * which has O(n) complexity. It builds the tree in a single pass.
 * @link https://github.com/philipstanislaus
 * @link https://www.npmjs.com/package/performant-array-to-tree
 */
const arrayToTree = (items) => {

    /**
     * The nested tree.
     * @type {*[]}
     */
    const rootItems = [];

    /**
     * Stores all already processed items with their ids as
     * key so we can easily look them up
     * @type {{}}
     */
    const lookup = {};

    /* ==================================================================
     * Idea of this loop:
     * ==================================================================
     * Whenever an item has a parent, but the parent is not yet in the
     * lookup object, we store a preliminary parent in the lookup object
     * and fill it with the data of the parent later if an item has no
     * parentId, add it as a root element to rootItems
     */

    for (const item of items) {

        const itemId   = item['id']
        const parentId = item['parentId']

        /*
         * Check whether item already exists in the lookup table. If not,
         * add a placeholder. We'll add the details later.
         */
        if (! lookup[itemId]) lookup[itemId] = { ['children']: [] }

        /*
         * Fill in the details of our previously-created placeholder
         * in the lookup table.
         */
        lookup[itemId] = { ...item, ['children']: lookup[itemId]['children'] }

        /*
         * Create a symbol for our item.
         */
        const TreeItem = lookup[itemId]

        /* ==================================================================
         * Determine where the item goes in the tree.
         * ================================================================== */

        /*
         * If the item has no parentId, it is the root node.
         */

        if (parentId === null || parentId === undefined || parentId === '') {

            rootItems.push(TreeItem)
        }

        /*
         * If the item has a parentId, add it to the tree.
         */

        else {

            /*
             * Check whether the parent already exists in the lookup table.
             * If not, add a placeholder. We'll add the details later.
             */

            if (! lookup[parentId]) lookup[parentId] = { ['children']: [] }

            /*
             * Add the current item to the parent
             */
            lookup[parentId]['children'].push(TreeItem)
        }
    }

    return rootItems
}

const tree = arrayToTree([
    { id: 'x001', parentId: null, name: 'Joe' },

    { id: 'x002', parentId: 'x001', name: 'Sammy',   children : []},
    { id: 'x003', parentId: 'x001', name: 'Emily',   children : []},
    { id: 'x004', parentId: 'x001', name: 'Scott',   children : []},

    { id: 'x005', parentId: 'x002', name: 'Fred',    children : []},
    { id: 'x006', parentId: 'x002', name: 'Vickie',  children : []},
    { id: 'x007', parentId: 'x002', name: 'Marlow',  children : []},

    { id: 'x008', parentId: 'x003', name: 'Anna',    children : []},
    { id: 'x009', parentId: 'x003', name: 'Brad',    children : []},
    { id: 'x010', parentId: 'x003', name: 'Sarah',   children : []},

    { id: 'x011', parentId: 'x004', name: 'Mark',    children : []},
    { id: 'x012', parentId: 'x004', name: 'Debbie',  children : []},
    { id: 'x013', parentId: 'x004', name: 'Boomer',  children : []},

    { id: 'x014', parentId: 'x005', name: 'Stuey',   children : []},
    { id: 'x015', parentId: 'x005', name: 'Jessie',  children : []},
    { id: 'x016', parentId: 'x005', name: 'Tolstoy', children : []},

    { id: 'x017', parentId: 'x009', name: 'Maddie',  children : []},
    { id: 'x018', parentId: 'x009', name: 'Scout',   children : []},
    { id: 'x019', parentId: 'x009', name: 'Jordie',  children : []},
]);

console.log("\nTree:\n")
console.log(
    "Tree: \n" +
    JSON.stringify(tree, undefined, 2)
)