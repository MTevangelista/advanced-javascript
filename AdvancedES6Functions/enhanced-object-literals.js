const propName = 'teste'
const prop = 'Car'

function method() {
    console.log('method called');
}

let obj = {
    [propName + 'concat']: 'prop value',
    prop,
    prop1: 'my prop1',
    method,
    sum(a, b) {
        return a + b
    }
}

console.log(obj);
console.log(obj.prop);
console.log(obj.prop1);
obj.method()
console.log(obj.sum(1, 5));