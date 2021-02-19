
console.log("\n___________ without forwarding ___________\n");

let data1 = {
    num: 0,
    add(v = 1) {
        this.num += v;
        return this.num;
    }
}


function cacheFunction1(func) {
    const cache = new Map();
    return function (...args) {
        const hash = args.join(",");
        if (cache.has(hash)) {
            return cache.get(hash);
        } else {
            let result = func(...args);

            cache.set(hash, result);
            return result;
        }
    }
}

console.log("data1 -> ", data1);
console.log("data1.add(2) -> ", data1.add(2));

data1.add = cacheFunction1(data1.add);

console.log("data1.add(2) cached -> ");
try {
    console.log(data1.add(2));
} catch (error) {
    console.log("error -> ", error);
}

console.log("\n___________ with forwarding ___________\n");

let data2 = {
    num: 0,
    add(v = 1) {
        this.num += v;
        return this.num;
    }
}


function cacheFunction2(func) {
    const cache = new Map();
    return function (...args) {
        const hash = args.join(",");
        if (cache.has(hash)) {
            return cache.get(hash);
        } else {
            /**
             * Caso func seja um método de objeto, ela perderá
             * o contexto do objeto em que estava inserida a não
             * ser que o contexto da função de retorno seja
             * encaminhada para ela
             */
            let result = func.call(this, ...args);
            // let result = func.apply(this, args);

            cache.set(hash, result);
            return result;
        }
    }
}

console.log("data2 -> ", data2);
console.log("data2.add(2) -> ", data2.add(2));

data2.add = cacheFunction2(data2.add);

console.log("data2.add(2) cached -> ");
try {
    console.log(data2.add(2));
} catch (error) {
    console.log("error -> ", error);
}