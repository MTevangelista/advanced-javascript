// Generators

function* naturalNumbers() {
    let number = 0
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers()
for (let index = 0; index <= 5; index++) {
    console.log(it.next());
}

// -----------------

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for(let i = 0; i < this.values.length; i++){
            yield this.values[i]
        }
    }
}

for(let value of obj) {
    console.log(value);
}