
function func1(a, b, c, d) {
    return ( (a + b) * c ) / d;
}

function func2(a, c) {
    return func1(a, 2, c, 4);
}

console.log(func1(1, 2, 3, 4));
console.log(func2(1, 3));