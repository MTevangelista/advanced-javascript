const sum = (a, b) => a + b

const sum2 = a => a + 5

const createObj = () => ({ teste: 123})

let obj = {
    showContext: function showContext() {
        // this = obj
        
        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
}

console.log(sum(3,2));
console.log(sum2(3));
console.log(createObj());

obj.showContext()