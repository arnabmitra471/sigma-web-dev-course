let arr = [1,3,5,7,11,13,17,19,21,23,25,27,29]

let squaredVal = arr.map(value=>{
        return value ** 2
})
console.log(squaredVal)


const greaterThanSeven = (val)=>{
    return val > 7
}
const filteredArr = arr.filter(greaterThanSeven)
console.log(filteredArr)

const natNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const sum_arr = natNums.reduce((total,num)=>{
    return total += num
})
console.log(sum_arr)

