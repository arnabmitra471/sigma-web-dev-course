console.log("I am a tutorial on loops");

let a = 1

// console.log(a)
// console.log(a + 1)
// console.log(a + 2)
// console.log(a + 3)

// Basic for loop

/*
    for(initialization;condition;update statemet)
    {
        // Code to be executed
    }
*/
/*
for(let i = 0;i<100;i++){
    console.log(a + i);
}
*/
/* for in loop - The for in loop is used to iterate through the keys of an object and get all the keys
and the values associated with those keys */

const obj = {
    "name": "Arnab",
    "Roll No": 5,
    "favsub": ["Computer science","science"],
    "fav prog": ["Javascript","Python","C","C++","Java"]
}

// for(let key in obj){
//     const element = obj[key];
//     console.log(key,element);
// }

// let apple = "An apple a day keeps the doctor away";
// for(const char of apple){
//     console.log(char)
// }
//let i = 1

// while(i<100){
//     console.log(i);
//     i++;
// }

let i = 10;
do
{
    console.log(i)
    i++;

}while(i<6)
