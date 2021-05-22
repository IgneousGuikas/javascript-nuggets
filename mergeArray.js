const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));

console.time();
for (let i = 0; i < 10_000_000; i++) {
    const temp1 = [...arr1];
    const temp2 = [...arr2];
    temp1.concat(temp2);
}
console.timeEnd();

const temp3 = [...arr1];
const temp4 = [...arr2];
temp3.push.apply(temp3, temp4);
console.log(temp3);

console.time();
for (let i = 0; i < 10_000_000; i++) {
    const temp1 = [...arr1];
    const temp2 = [...arr2];
    temp1.push.apply(temp1, temp2);
}
console.timeEnd();

const temp5 = [...arr1];
const temp6 = [...arr2];
temp5.push(...temp6);
console.log(temp5);

console.time();
for (let i = 0; i < 10_000_000; i++) {
    const temp1 = [...arr1];
    const temp2 = [...arr2];
    temp1.push(...temp2);
}
console.timeEnd();