const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("This is blog home page")
})
router.get("/about",(req,res)=>{
    res.send("This is the blog's about page");
})

router.get("/blogpost/:slug",(req,res)=>{
    res.send(`This post is about ${req.params.slug}`)
})

module.exports = router;