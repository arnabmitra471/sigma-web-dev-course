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

// factorial using array.reduce() method

 function factorialWithReduce(number) {
    if (number < 0) {
        console.log("Factorial undefined for negative numbers");
        return;
    }
    
    else if(number === 0)
    {
        return 1
    }
    else
    {
        let arr = Array.from(Array(number + 1).keys());
        let facReduce = arr.slice(1,).reduce((a, b) => a * b);
        return facReduce;
    }
}

let num = parseInt(prompt("Enter a number: "));
let resultFactorial = factorialWithReduce(num)
console.log(resultFactorial);

