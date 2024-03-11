const express = require("express");
const router = express.Router();


router.use((req,res,next)=>{
    console.log("This is a middleware for authorization of blog users")
    next();
})
router.use((req,res,next)=>{
    console.log("This is a middleware for fetching blog posts by id")
    next();
})
router.get("/",(req,res)=>{
    res.send("This is the blog home page")
})
router.get("/about",(req,res)=>{
    res.send("This is the blog about page")
})
router.get("/contact",(req,res)=>{
    res.send("This is the blog contact page")
})
router.get("/blogpost/:id",(req,res)=>{
    res.send(`Logic to fetch post with the topic ${req.params.id} from the db`)
})

module.exports = router;
