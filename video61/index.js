let random = Math.random();
console.log(random)

let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));
let op = prompt("Enter the Operation")

let obj = {
    "+": "-",
    "*": "+",
   "-": "/",
   "/": "**" 
}

if(random > 0.1)
{
    if(op === "+")
    {
        alert(`The result is ${num1 + num2}`)
    }
    else if(op === "-")
    {
        alert(`The result is ${num1 - num2}`)
    }
    else if(op === "*")
    {
        alert(`The result is ${num1 * num2}`)
    }
    else if(op === "/")
    {
        alert(`The result is ${num1 / num2}`)
    }
    
}
else
{
    if(op ==="+")
    {
        alert(`The result is ${num1 - num2}`)
    }
    else if(op === "-")
    {
        alert(`The result is ${num1 / num2}`)
    }
    else if(op === "*")
    {
        alert(`The result is ${num1 + num2}`)
    }
    else if(op === "/")
    {
        alert(`The result is ${num1 ** num2}`)
    }

}