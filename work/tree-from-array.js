/**
 * Build tree from array.
 * @param list
 * @returns {{}}
 */
const arrayToTree = (list) => {

    let tree   = {children : []},
        lookup = {};

    list.map((item) => {

        if (! lookup[item.id]) {
            lookup[item.id] = {children: []};
        }

        if (! lookup[item.parentId]) {
            lookup[item.parentId] = {children : []}
        }

        item = {...item, ...lookup[item.id]}
        lookup[item.parentId].children.push(item);

        if (! item.parentId) {
            tree = {...item, ...tree}
        }
        else {
            tree.children.push(item)
        }
    });

    return tree;
}

/**
 * Unflattens an array to a tree with runtime O(n)
 */
function arrayToTree2 (items) {

    const conf = {
        id       : 'id',
        parentId : 'parentId',
        children : 'children'
    }

    // the resulting unflattened tree
    const rootItems = []

    // stores all already processed items with their ids as key so we can easily look them up
    const lookup = {}

    // stores all item ids that have not been added to the resulting unflattened tree yet
    // this is an opt-in property, since it has a slight runtime overhead
    const orphanIds = new Set();

    // idea of this loop:
    // whenever an item has a parent, but the parent is not yet in the lookup object, we store a preliminary parent
    // in the lookup object and fill it with the data of the parent later
    // if an item has no parentId, add it as a root element to rootItems

    for (const item of items) {

        const itemId   = item[conf.id]
        const parentId = item[conf.parentId]

        // look whether item already exists in the lookup table
        if (! Object.prototype.hasOwnProperty.call(lookup, itemId)) {
            // item is not yet there, so add a preliminary item (its data will be added later)
            lookup[itemId] = { [conf.children]: [] }
        }

        // if we track orphans, delete this item from the orphan set if it is in it
        if (orphanIds) { orphanIds.delete(parentId) }

        // add the current item's data to the item in the lookup table
        lookup[itemId] = { ...item, [conf.children]: lookup[itemId][conf.children] }

        const TreeItem = lookup[itemId]

        if (parentId === null || parentId === undefined || parentId === '') {
            // is a root item
            rootItems.push(TreeItem)
        }
        else {
            // has a parent

            // look whether the parent already exists in the lookup table
            if (! Object.prototype.hasOwnProperty.call(lookup, parentId)) {
                // parent is not yet there, so add a preliminary parent (its data will be added later)
                lookup[parentId] = { [conf.children]: [] }

                // if we track orphans, add the generated parent to the orphan list
                if (orphanIds) { orphanIds.add(parentId) }
            }

            // add the current item to the parent
            lookup[parentId][conf.children].push(TreeItem)
        }
    }

    return rootItems
}

const tree1 = arrayToTree([
    { id: 'x001', parentId: null, name: 'Tara' },

    { id: 'x002', parentId: 'x001', name: 'Sammy',    children : []},
    { id: 'x003', parentId: 'x001', name: 'Tom',    children : []},
    { id: 'x004', parentId: 'x001', name: 'Scott',  children : []},

    { id: 'x005', parentId: 'x002', name: 'Fred',   children : []},
    { id: 'x006', parentId: 'x002', name: 'George', children : []},
    { id: 'x007', parentId: 'x002', name: 'Marlow', children : []},

    { id: 'x008', parentId: 'x003', name: 'Boris',  children : []},
    { id: 'x009', parentId: 'x003', name: 'Mark',   children : []},
    { id: 'x010', parentId: 'x003', name: 'Brad',   children : []},

    { id: 'x011', parentId: 'x004', name: 'Ann,a',   children : []},
    { id: 'x012', parentId: 'x004', name: 'Debbie', children : []},
    { id: 'x013', parentId: 'x004', name: 'Boomer', children : []},

    { id: 'x014', parentId: 'x005', name: 'Stuey', children : []},
    { id: 'x015', parentId: 'x005', name: 'Jessie', children : []},
    { id: 'x016', parentId: 'x005', name: 'Tolstoy', children : []},

    { id: 'x017', parentId: 'x009', name: 'Maddie', children : []},
    { id: 'x018', parentId: 'x009', name: 'Scout', children : []},
    { id: 'x019', parentId: 'x009', name: 'Jordie', children : []},
])

const tree2 = arrayToTree2([
    { id: 'x001', parentId: null, name: 'Tara' },

    { id: 'x002', parentId: 'x001', name: 'Sammy',    children : []},
    { id: 'x003', parentId: 'x001', name: 'Tom',    children : []},
    { id: 'x004', parentId: 'x001', name: 'Scott',  children : []},

    { id: 'x005', parentId: 'x002', name: 'Fred',   children : []},
    { id: 'x006', parentId: 'x002', name: 'George', children : []},
    { id: 'x007', parentId: 'x002', name: 'Marlow', children : []},

    { id: 'x008', parentId: 'x003', name: 'Boris',  children : []},
    { id: 'x009', parentId: 'x003', name: 'Mark',   children : []},
    { id: 'x010', parentId: 'x003', name: 'Brad',   children : []},

    { id: 'x011', parentId: 'x004', name: 'Anna',   children : []},
    { id: 'x012', parentId: 'x004', name: 'Debbie', children : []},
    { id: 'x013', parentId: 'x004', name: 'Boomer', children : []},

    { id: 'x014', parentId: 'x005', name: 'Stuey', children : []},
    { id: 'x015', parentId: 'x005', name: 'Jessie', children : []},
    { id: 'x016', parentId: 'x005', name: 'Tolstoy', children : []},

    { id: 'x017', parentId: 'x009', name: 'Maddie', children : []},
    { id: 'x018', parentId: 'x009', name: 'Scout', children : []},
    { id: 'x019', parentId: 'x009', name: 'Jordie', children : []},
])

// console.log("\nTree:\n")
// console.log(tree);

console.log("\nTree 1:\n")
console.log(JSON.stringify(tree1, undefined, 2))

console.log("\nTree 2:\n")
console.log(JSON.stringify(tree2, undefined, 2))