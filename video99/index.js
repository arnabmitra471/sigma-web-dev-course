import express from "express"
import mongoose from "mongoose";
import Employee from "./models/Employee.js";
const app = express()
const port = 3000

let conn = await mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set("view engine","ejs");

app.get('/', (req, res) => {
  res.render("index")
})

const getRandom = (arr)=>{
    let randNum = Math.floor(Math.random() * (arr.length - 1))
    return arr[randNum];
}
app.get("/generate",async(req,res)=>{
    // Clear the employees collection
    // Generate random data
    let deletedData = await Employee.deleteMany({})
    console.log(deletedData)
    for(let i=1;i<=10;i++)
    {
        let randomNames = ["Rohan","Mohan","Sohan","Sobhan"];
        let randomLang = ["Java","Python","C++","Javascript"];
        let randomCities = ["Bilaspur","Muradabad","Mysore","Kolkata"];

        let emp = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.random()*22000,
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random() > 0.5)? true: false
        })
        console.log(emp)
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})