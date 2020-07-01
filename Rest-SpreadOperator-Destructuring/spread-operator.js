// Spread Operator -> strings, array, literals objects

// string

const str = 'Digital Innovation One'

function logArgs(...args) {
    console.log(args);
}

logArgs(...str)

// Array

const arr = [1, 2, 3, 4]
const arr2 = [...arr, 5, 6, 7, 8]
const arr3 = [...arr, ...arr2, 0, 0, 0]

function logArgs2(a, b, c) {
    console.log(a, b, c);
}

logArgs2(...arr)

console.log(arr2);
console.log(arr3);

// Literal object

const obj = {
    test: 123
}
const obj2 = {
    test2: 'hello'
}
const objMerged = {
    ...obj,
    ...obj2
}

console.log(objMerged);

const object = {
    test: 123,
    subObj: {
        test: 123
    }
}
const object2 = { ...object, subObj: { ...object.subObj } }

console.log(object);

// *------*

// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

// const sum = (...rest) => {
//     return multiply(...rest)
// }

// console.log(sum(5, 5, 5, 2, 3));