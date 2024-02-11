// Factorial using for loops
const factorial = n=>{
    let fact = 1;


    for(let i=1;i<=n;i++)
    {
        fact *= i
    }
    return fact;
}

let n = parseInt(prompt("Enter a number to get its factorial: "))
let res = factorial(n)
console.log(`The factorial is ${res}`);

// factorial using array.reduce() method
let num = parseInt(prompt("Enter a number: "))
let arr = [];

for(i=1;i<=num;i++){
    arr.push(i);
}
console.log(arr);
let factorial_arr = arr.reduce((acc,num)=>{
    return acc *= num;
})
console.log(`The factorial using reduce method is ${factorial_arr}`);