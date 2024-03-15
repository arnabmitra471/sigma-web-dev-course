import mongoose from "mongoose";
import express from "express"
import { Todo } from "./models/Todo.js";


let conn = mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', async(req, res) => {
    const todo = new Todo({taskTitle: "1",taskDesc:"Description of this todo",isDone:false})
    await todo.save();
  res.send('Hello World!')
})

app.get("/findTask",async(req,res)=>{
    const todo = await Todo.findOne({})
    res.json({title: todo.taskTitle,desc: todo.taskDesc,isDone: todo.isDone})
})
app.delete("/deleteTask",async(req,res)=>{

    const deletedTodo = await Todo.deleteMany({taskTitle: "1"})
    console.log(deletedTodo)
    res.send("Todos have been deleted")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})