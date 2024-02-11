// Javascript Arrays

const arr = [1,4,5,6,8,9]
console.log(arr,typeof arr)

console.log(`The length of arr is ${arr.length}`)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])

arr[0] = 453
arr[1] = 676
console.log(arr)

console.log(arr.toString())

console.log(arr.join(" and "))

let arr2 = [26,98,90,65,12,87,98]

console.log(arr2)
console.log(arr2.pop())
console.log(arr2)

console.log(arr2.push("Arnab"))
console.log(arr2)

console.log(arr2.shift())
console.log(arr2.shift())
console.log(arr2.shift())
console.log(arr2.shift())
console.log(arr2)
console.log(arr2.unshift("Mango","Apple","Papaya","Guava","Muskmelon"));
console.log(arr2)


let fruits = ["Apple","Mango","Cherry","Papaya","Guava","Pineapple"]
let vegetables = ["Tomato","Brinjal","Potato","Onion"]
let nums = [645,98,987,888,65,233,654,312,213,876,987,908]
let grocery = fruits.concat(vegetables,nums)
console.log(grocery)
console.log(nums)
const remomvedElements = nums.splice(1,5)
console.log(remomvedElements)
console.log(nums)

const slicedNums = nums.slice(1)
console.log(slicedNums)