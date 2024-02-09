console.log("This is Strings tutorial in js");

// Converting a string to uppercase
let real_name = "Arnab Mitra";
console.log(real_name);
console.log(real_name.toUpperCase());
console.log(real_name.toLowerCase())
// String indexing - Indices in Javascript start from zero
/* First character is located at index 0
Second character is at index 1
Third character is at index 2 and so on... */

for(char of real_name)
{
    console.log(char);
}
// let obj = {
//     "name":"Arnab",
//     "age":23,
//     "favsub":["Computer Science","Science"],
//     "favprog":["C","Python","Java","Javascript"]
// }
// let key = 0
// for(let key in obj)
// {
//     console.log(key,obj[key]);
//     for(let i of obj.favprog)
//     {
//         console.log(i);
//     }
// }
// console.log("This is a separatior");
// console.log(key)
// console.log("The length of the name is "+real_name.length);

// Template Literals

let person = "Arnab";
let friend = "Rohan";
console.log("My name is "+person+" and my friend's name is "+friend);
console.log(`My name is ${person} and my friend's name is ${friend}`);

let b = "Roh \"an\"";
console.log(b);

let name2 = 'Adam D\' Angelo'
console.log(name2)


// String Slicing

let fruit = "Mango is an awesome and lovely fruit Mango";
let fruit_chars = fruit.slice(1,13);
let fruit_str = fruit.slice(1);
console.log(fruit_chars)
console.log(fruit_str)


console.log(fruit.replace("Mango","Apple"))
console.log(fruit.replaceAll("Mango","Apple"))


console.log(fruit.concat("Arnab","Mitra"));
// Remove white spaces from the starting of the string
let favLang = "Java Script is my favourite language for web   development this   ";
console.log(favLang)
let trimmedLang = favLang.trimEnd()
console.log(trimmedLang)
// Remove white spaces from the starting of the string
let favLang2 = "   Python is my favourite language for web   development this";
console.log(favLang2)
let trimmedLang2 = favLang2.trimStart()
console.log(trimmedLang2)

let anotherFriend = "Shubham Mitra";
console.log(anotherFriend.padStart(20,"J"))
console.log(anotherFriend.padEnd(20,"Aaaaaa"))

let greeting = "Hello Euphoria GenX \n"
console.log(greeting.repeat(10))


let greetingCharIndex = greeting.indexOf("wwwhhhd")
console.log(greetingCharIndex)
let lastGreetingChars = greeting.lastIndexOf("Science")
console.log(lastGreetingChars)
let lenGreet = greeting.length
console.log(`The length of the string is ${lenGreet}`)