/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
      let key = JSON.stringify(args);
      
      if(key in cache){
        return cache[key];
      }else{
        let result = fn(...args);
        cache[key] = result;
        return result;
      }
    }
}