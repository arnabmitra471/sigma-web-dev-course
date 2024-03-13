//The asynchronous nature of javascript

console.log("Arnab is a web developer");
console.log("He is also learning app development")

setTimeout(()=>{
    console.log("I am inside setTimeout")
},5000)

console.log("The end")

// Callback functions in javascript


const goodMorning = (name)=>{
    console.log("Good Morning "+name)
}
const fn = (arg,callback)=>{
    console.log("Nothing "+arg)
    callback("Vrinda")
}

const goodNight = (arg,fn)=>{
    console.log(arg);
    fn("Shaarav",goodMorning)
}
const loadScript = (src,callback)=>{
    let sc = document.createElement("script");
    sc.src = src
    sc.onload = callback("Arnab",goodNight)
    document.body.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",goodNight)
