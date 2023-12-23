/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    
    return new Promise((resolve, reject) => {
        let results = [];
        let counter = 0;

        if(functions.length === 0) return resolve(results);

        functions.forEach((currentFn, index) => {
            currentFn()
            .then(response => {
                results[index] = response;
                counter++;
                if(functions.length === counter) return resolve(results);
            })
            .catch(error => {
                reject(error);
            })
        })
    }) 
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */