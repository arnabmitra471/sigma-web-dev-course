const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.static("files"));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/about", (req, res) => {
    res.send("This is an about page");
})

app.get("/contact", (req, res) => {
    res.send("This is contact page");
})
app.get("/blog", (req, res) => {
    res.send("This is blog page")
})
// app.get("/blog/intro-to-js", (req, res) => {
//     res.send("Logic to fetch intro-to-js from db")
// })
// app.get("/blog/intro-to-python", (req, res) => {
//     res.send("Logic to fetch intro-to-python from db")
// })
app.get("/blog/:slug", (req, res) => {
    console.log(req.params)
    console.log(req.query)
        res.send(`Logic to fetch ${req.params.slug} from db`)
    })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})