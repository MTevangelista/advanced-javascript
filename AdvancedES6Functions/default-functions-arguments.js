function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(5));

// lazy evaluation
function randomNumber() {
    console.log('Generating a random number...');
    
    return Math.random() * 10
}

function multiply2(a, b = randomNumber()) {
    return a * b
}

console.log(multiply2(5));
console.log(multiply2(5));
