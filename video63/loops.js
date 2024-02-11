const arr = [1,93,5,9,88];

console.log(arr);
for(let i=0;i<arr.length;i++){
    const element = arr[i];
    console.log(element);
}

// arr.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })

let numbers = [65,98,87,65,76,24,65,89,80,70,100,165]
let sum = 0

numbers.forEach((item)=>{
    sum += item;
})
console.log(sum);

let obj = {
    a: 1,
    b: 2,
    c:3,
    d:4
}
console.log(obj)
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }
for(let element of numbers)
{
    console.log(element);
}

