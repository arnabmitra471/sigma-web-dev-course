const express = require('express')
const blog = require("./routes/blog")
const fs = require("fs")
const app = express()
const port = 3000


// Middlewares in express
app.use(express.static("public"))
app.use("/blog",blog)

// Middleware 1
const myLogger = (req,res,next)=>{
    const date = new Date();
    fs.appendFileSync("logs.txt",`${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()} is a ${req.method}\n`)
    next();
}
// Middleware 2
const myLogger2 = (req,res,next)=>{
    // console.log(req.headers)
    req.arnab = "I am Arnab"
    console.log("Logged the messages again")
    next();
}
app.use(myLogger);
app.use(myLogger2)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about",(req,res)=>{
    res.send("Hello About ! "+req.arnab)
})
app.get("/contact",(req,res)=>{
    res.send("Hello Contact !")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})