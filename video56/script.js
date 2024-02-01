console.log("Hello I am conditional tutorial");

let age = 1
//let grace = 7
// console.log(age += grace);
// console.log(age -= grace);
// console.log(age *= grace);
// console.log(age /= grace);
// console.log(age %= grace);
// console.log(age **= grace);

let names = ["Arnab", "Vrinda", "Ramesh", "Harry", "Shaarav"];


// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if (age >= 18) {
    console.log("You can drive");
    let names = "Shubham Shivangi Arnab Vrinda";
    console.log(names);

}
else if (age == 0) {
    console.log("Are you kidding ?");
}
else if(age == 1) {
    console.log("Are you again kidding ?");
}
else {
    console.log("You cannot drive");
}

console.log(names);
console.log(typeof names)

// Ternary Operator - Short hand if else

let num1 = 78
let num2 = 45
let result = num1 > num2 ? num1 - num2 : num2 - num1;

/*
    This translates to
    if(num1>num2){
        result = num1 - num2
    }
    else {
        result = num2 - num1
    }
*/
console.log("The result is",result)