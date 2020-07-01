// rest operator ...

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}

const sum2 = (a, b, ...rest) => {
    console.log(a, b, rest);
}

console.log(sum(5, 5, 5, 2, 3));
console.log(sum2(5, 5, 5, 2, 3));