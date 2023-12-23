/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


 const f = createHelloWorld([{},null,42]);
 f(); // "Hello World"