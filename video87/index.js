const fs = require("fs")



console.log("Starting to write in file !!")
// fs.writeFileSync("arnab.txt","Arnab is a good boy2")


fs.writeFile("arnab.txt","Vrinda is a good girl",()=>{
    console.log("Done writing to file !!")
})
console.log("ending")

fs.appendFile("arnab.txt","I am learning node js basics now\n This is another line\n This is yet another line",(err)=>{
    console.log(err)
});

