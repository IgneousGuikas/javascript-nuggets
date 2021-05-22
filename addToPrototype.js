Array.prototype.union = function (second) {
    return second.reduce((arr, item) => {
        arr.indexOf(item) === -1 && arr.push(item);
        return arr;
    }, this).sort();
};

const arr = [1, 2, 3];
console.log(arr);

console.log(arr.union([2, 3, 4]).union([4, 5, 6]));