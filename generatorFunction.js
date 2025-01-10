function* generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());