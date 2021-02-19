
function Counter() {
    let count = 0;
    return (reset = false) => {
        count = reset ? 0 : count + 1;
        return count;
    }
}

const counter = Counter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(true));
console.log(counter());