import mongoose from "mongoose";
const {Schema} = mongoose

const todoSchema = new Schema({
    taskTitle: String,
    taskDesc: String,
    isDone: Boolean
})

const Todo = mongoose.model("Todo",todoSchema);
export { Todo }