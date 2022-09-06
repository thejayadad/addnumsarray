

let nums = [8,9,19,10]
let sum = 0;

for (let i = 0; i < nums.length; i++){
    sum += nums[i]
}

let num = nums.reduce((a, b) => a + b);


document.write(sum)
document.write("<br/>")
document.write(num)