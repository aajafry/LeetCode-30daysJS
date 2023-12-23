/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
    if (obj === null || typeof obj !== 'object'){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.filter(Boolean)
        .map(compactObject);
    }

    const res = {};

    for(let key in obj){
        let value = compactObject(obj[key]);
        if(Boolean(value)){
           res[key] = value;
        }
    }
    return res;
};