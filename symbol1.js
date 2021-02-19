const funcKey = require("./symbol2");
const key = Symbol.for("key");

console.log(funcKey.toString());
console.log(key.toString());
console.log(key === funcKey);
console.log(Symbol("key") === Symbol("key"));