/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkArray = [],
        index = 0,
        arraySeq = size;
    while(index < arr.length){
        chunkArray.push(arr.slice(index, arraySeq));
        index += size;
        arraySeq += size;
    }
    return chunkArray;

};