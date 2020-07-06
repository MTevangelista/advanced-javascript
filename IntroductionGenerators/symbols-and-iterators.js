// Symbols

const uniqueId = Symbol('hello')

// Well know symbols

Symbol.iterator;

const array = [1, 2, 3, 4]

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const array2 = [...obj]
console.log(array2);