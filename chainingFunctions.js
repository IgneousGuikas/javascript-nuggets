function add(x) {
    const f = (y) => add(x + y);
    f.valueOf = () => x;
    return f;
};

console.log(add);
console.log(add(1));
console.log(add(1).valueOf());
console.log(add(1)(2).valueOf());
console.log(add(1)(2)(3).valueOf());