
console.log("\n___________ generator basic ___________\n");

function* generateSequence() {
    let current = 0;
    while (true) {
        yield current;
        current++;
    }
}

const generator = generateSequence(); // A função não foi executada ainda

console.log(generator);
// Primeira execução, current é declarado e o seu valor é retornado pelo
// yield
console.log(generator.next());
// Segunda execução, o ponto de partida é a linha do yield
console.log(generator.next());
console.log(generator.next());

console.log("\n___________ generator as iterator ___________\n");

function* range(from, to) {
    let current = from;
    while (true) {
        yield current;
        if (current <= to) {
            current++;
            continue;
        }
        break;
    }
}

const iter = range(4, 10);

for(let num of iter) {
    console.log(num);
}

console.log([ ...range(4, 10) ]);

console.log("\n___________ generator as object iterator ___________\n");

let range2 = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log(...range2);

console.log("\n___________ generator composition ___________\n");

function* multiRange(...ranges) {
    for (let pair of ranges) {
        console.log(pair);
        console.log("Start");
        yield* range(...pair);
        console.log("End");
    }
}

const iter2 = multiRange([1,5],[4,20],[10,15]);

for (let list of iter2) {
    console.log(list);
}

console.log("\n___________ generator with yield result ___________\n");

function* sum() {
    let a = yield "Insira o primeiro número:";
    let b = yield "Insira o segundo número:";
    return a + b;
}

const func = sum();

console.log(func.next());
console.log(func.next(3));
console.log(func.next(4));

console.log("\n___________ generator asynchronous ___________\n");

async function* generateSequence2(start, end) {

    for (let i = start; i <= end; i++) {

      await new Promise(resolve => setTimeout(resolve, 1000));
  
      yield i;
    }
  
  }
  
  (async () => {
  
    let generator = generateSequence2(1, 5);
    for await (let value of generator) {
      console.log(value);
    }
  
  })();