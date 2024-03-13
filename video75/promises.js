console.log("This is promises")

let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("Random number was not supporting you !!")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done !!")
            resolve("Arnab")
        }, 3000)
    }
})

let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("Random number was not supporting you 2!!")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2 !!")
            resolve("Arnab 2")
        }, 1000)
    }
})
let prom3 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("Random number was not supporting you 3!!")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 3 !!")
            resolve("Arnab 3")
        }, 1000)
    }
})
let prom4 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("Random number was not supporting you 4!!")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 4 !!")
            resolve("Arnab 4")
        }, 1000)
    }
})
let prom5 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("Random number was not supporting you 5!!")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 5 !!")
            resolve("Arnab 5")
        }, 1000)
    }
})
let prom6 = Promise.race([prom1,prom2,prom3,prom4,prom5]);
prom6.then(value=>{
    console.log(value)
})
let p3 = Promise.all([prom1,prom2])
p3.then(val=>{
    console.log(val)
},(err)=>{
    console.log(err)
})

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello from p1 after 5 seconds")
        resolve(45)
    },5000)
})
p1.then(value=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello from p2 after 5 seconds")
            resolve(56)
        },5000)
    })
    return p2
}).then(result=>{
    console.log(result)
})