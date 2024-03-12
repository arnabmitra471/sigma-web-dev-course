const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")
app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now";
    let arr = ["Hey",54,87,98,43,"How","are","you"]
  res.render("index",{siteName: siteName,searchText:searchText,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})