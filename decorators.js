
function computeValue(value) {
    for(var i = 0; i < 100000000; i++) {};
    return value + 10;
}

/**
 * Decorator: função que altera a estrutura de outra função
 * envolvendo ela lógica adicional
 */
function cacheFunction(func) {
    const cache = new Map();
    return function (value) {
        if (cache.has(value)) {
            return cache.get(value);
        } else {
            let result = func(value);

            cache.set(value, result);
            return result;
        }
    }
}

const func = cacheFunction(computeValue);

console.time();
console.log(func(40));
console.timeEnd();
console.time();
console.log(func(40));
console.timeEnd();