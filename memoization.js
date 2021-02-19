
console.log("\n___________ without memo ___________\n");

function computeValue(value) {
    for(var i = 0; i < 100000000; i++) {};
    return value + 10;
}

console.time();
console.log(computeValue(40));
console.timeEnd();
console.time();
console.log(computeValue(100));
console.timeEnd();
console.time();
console.log(computeValue(40));
console.timeEnd();

console.log("\n___________ with memo ___________\n");

function memoComputeValue() {
    const cache = {};
    return (value) => {
        if (typeof cache[value] !== "undefined") {
            return cache[value];
        } else {
            cache[value] = computeValue(value);
            return cache[value];
        }
    }
}

const func = memoComputeValue();

console.time();
console.log(func(80));
console.timeEnd();
console.time();
console.log(func(200));
console.timeEnd();
console.time();
console.log(func(80));
console.timeEnd();