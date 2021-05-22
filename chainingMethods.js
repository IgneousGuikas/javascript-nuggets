console.log("\n___________ data 1 ___________\n");

let data1 = {
    num: 0,
    add(v = 1) {
        this.num += v;
    },
    sub(v = 1) {
        this.num -= v;
    }
};

console.log("data1 -> ", data1);
console.log("data1.add() -> ", data1.add());

console.log("data1.add().add() -> ");
try {
    console.log(data1.add().add());
} catch (error) {
    console.log(error);
}

console.log("data1 -> ", data1);

console.log("\n___________ data 2 ___________\n");

let data2 = {
    num: 0,
    add(v = 1) {
        this.num += v;
        return this;
    },
    sub(v = 1) {
        this.num -= v;
        return this;
    }
};

console.log("data2 -> ", data2);
console.log("data2.add() -> ", data2.add());

console.log("data2.add().add() -> ");
try {
    console.log(data2.add().add());
} catch (error) {
    console.log(error);
}

console.log("data2 -> ", data2);

console.log("\n___________ data 3 ___________\n");

let data3 = {
    num: 0,
    add(v = 1) {
        return {
            ...this,
            num: this.num + v,
        };
    },
    sub(v = 1) {
        return {
            ...this,
            num: this.num - v,
        };
    }
};

console.log("data3 -> ", data3);
console.log("data3.add() -> ", data3.add());

console.log("data3.add().add() -> ");
try {
    console.log(data3.add().add());
} catch (error) {
    console.log(error);
}

console.log("data3 -> ", data3);