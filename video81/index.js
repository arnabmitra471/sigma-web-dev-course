// Destructuring

let arr = [45,98,12,87,98,90,23,109,198,176,154]

console.log(arr);
let [num1,num2,num3,num4,num5,...rest] = arr

console.log(num1,num2,num3,num4,num5,rest)

