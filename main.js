
// two ways to get the sum of an array

// first
let numbers = [10, 9, 3, 2, 1]
let total = 0;

for (let i = 0; i < numbers.length; i++){
    total += numbers[i]
}

document.write(total)


// the second way

let num = numbers.reduce((a, b) => a + b);

document.write("<br/>")
document.write(num)