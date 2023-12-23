/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const collection = {};

    for(let index of arr1){
        collection[index.id] = index;
    }

    for (let index of arr2){
        collection[index.id] = collection[index.id] ? 
        {...collection[index.id],...index} :
        index;
    }

    return Object.values(collection);
};