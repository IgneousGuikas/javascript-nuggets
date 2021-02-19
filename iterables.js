
let range = {
    from: 0,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
}

for (let num of range) {
    console.log(num);
}

let range2 = {
    from: 1,
    to: 5,
  
    [Symbol.asyncIterator]() {
      return {
        current: this.from,
        last: this.to,
  
        async next() {
          await new Promise(resolve => setTimeout(resolve, 1000));
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range2) {
      console.log(value);
    }
  
  })()