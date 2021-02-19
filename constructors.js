
function Data(init = 0) {
    if (!new.target) {
        return new Data(init);
    }
    this.num = init;
    this.add = function(v = 1) {
        this.num += v;
        return this;
    }
    this.sub = function(v = 1) {
        this.num -= v;
        return this;
    }
}

const data1 = new Data();

console.log(data1);
console.log(data1.add());

const data2 = Data();

console.log(data2);
console.log(data2.add());