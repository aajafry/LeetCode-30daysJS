/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
   
    // let groupedArray = {};

    // for(let item of this) {
    //     const key = fn(item);
    //     if(groupedArray.hasOwnProperty(key)){
    //         groupedArray[key].push(item);
    //     }else{
    //         groupedArray[key] = [item];
    //     }
    // }
    // return groupedArray;


    return this.reduce((accumlator, item) => {
        const key = fn(item);
        
        (accumlator[key]) ? accumlator[key].push(item) : accumlator[key] = [item];
        
        return accumlator;
    }, {});

    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */