// Factorial using for loops
const factorial = n => {
    let fact = 1;


    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact;
}

let n = parseInt(prompt("Enter a number to get its factorial: "))
let res = factorial(n)
console.log(`The factorial is ${res}`);



