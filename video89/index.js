const express = require('express')

const blog = require("./routes/blog")
const app = express()
const port = 3000

app.use("/blog",blog)
// app.use(express.static("public"))
app.get('/', (req, res) => {
    console.log("Hey it is a GET request");
  res.send('Hello World!')
}).post("/about",(req,res)=>{
    console.log("Hey it is a POST request");
    res.send("This is about page with post request")
}).put("/about",(req,res)=>{
    console.log("Hey it is a PUT request");
    res.send("This is about page with put request")
})
app.delete("/about",(req,res)=>{
    console.log("Hey it is a DELETE request");
    res.send("This is about page with delete request")
})

app.get("/index",(req,res)=>{
    console.log(__dirname)
    res.sendFile("templates/index.html",{root:__dirname})
})
// Sending JSON Response to the user

app.get("/api",(req,res)=>{
    res.json({name:"Arnab",age:19,favSub:["Science","Computer","Computer Science"],friends:["Shaarav","Vrinda","Gunraaj","Maahi","Harshit"]})

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})