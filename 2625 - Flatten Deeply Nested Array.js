/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];

    for(let element of arr){
        if(Array.isArray(element) && n > 0){
            res.push(...flat(element, n - 1));
        }else{
            res.push(element);
        }
    }
    return res;
};