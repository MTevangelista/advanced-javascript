let array = ['Apple', 'Banana', 'Orange', ['Tomato'], {fruitName: 'MyApple', type: 'Fruit'}]

let apple = array[0]
let banana =  array[1]
let orange = array[2]
let tomato = array[3][0]
let fruit1 = array[4].name


// Destructuring Assignment - Array

let [apple2, banana2, orange2, [tomato2], { fruitName }] = array

console.log(apple, apple2);
console.log(tomato2);
console.log(fruitName);

// Destructuring Assignment - Object

let obj = {
    name: 'My obj',
    test: 'test',
    props: {
        age: 26,
        favoriteColors: ['Black', 'Red']
    }
}
let { name, test: myTest, props: { age, favoriteColors: [color1, color2] } } = obj

console.log(name);
console.log(myTest);
console.log(age);
console.log(color1, color2);

// Destructuring Assignment - Functions

function sum([a, b] = []) {
    return a + b
}

console.log(sum([5, 5]));

// Destructuring Assignment - Default values

function sum([a, b] = [0, 0]) {
    return a + b
}

console.log(sum());