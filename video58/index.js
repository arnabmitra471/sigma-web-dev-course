function printStatements(name) {
    console.log("Hey "+name +" you are nice");
    console.log("Hey "+name +" you are good");
    console.log("Hey "+name +" your t-shirt is nice");
    console.log("Hey "+name +" your course is also very very awesome");
}

printStatements("Rohan")
printStatements("Shivam")
printStatements("Shubhangi")

function sum(a,b,c=3){
    return a + b + c
}

let result1 = sum(4,7,67)
let result2 = sum(65,32,98)
let result3 = sum(90,109,644)
console.log("The sum of these numbers is "+result1)
console.log("The sum of these numbers is "+result2)
console.log("The sum of these numbers is "+result3)