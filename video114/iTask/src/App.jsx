import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const [showFinished,setShowFinished] = useState(true)

  // Get all the todos from the local storage
  useEffect(() => {

    const todoString = localStorage.getItem("todos");
    console.log(todoString)
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  // function to save all the todos to localStorage
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleAdd = () => {
    const newTodo = { id: uuidv4(), todo, isCompleted: false }
    setTodos(prevTodos =>[...prevTodos, newTodo])
    console.log(todos)
    setTodo("")
    saveToLS()
  }
  const handleEdit = (e, id) => {
    let todoToEdit = todos.filter((item) => {
      return item.id === id
    })
    setTodo(todoToEdit[0].todo)

    let newTodos = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id) => {
    let deleteTodoConf = confirm("Are you really sure you want to delete this todo ??")

    if (deleteTodoConf) {
      let newTodos = todos.filter((item) => {
        return item.id !== id
      })
      setTodos(newTodos)
      saveToLS()
    }
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleCheckbox = (e) => {
    const todoId = e.target.name;
    console.log(todoId)
    const index = todos.findIndex((item) => {
      return item.id === todoId
    })

    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }
  const toggleFinished = () => {
    setShowFinished(!showFinished);
  }
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto mx-3 bg-violet-100 my-5 p-5 rounded min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-xl underline decoration-purple-400">iTask - Manage your tasks at only one place</h1>
        <div className="addTodo">
          <h2 className="font-bold text-lg my-5">Add Todo</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder="Enter todo title" className="p-2 hover:bg-green-500 hover:text-white text-green-500 placeholder-green-500 hover:placeholder-white w-1/2 border-2 rounded-full border-purple-400 transition-colors" />
          <button type="submit" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-6 text-lg disabled:bg-violet-300" onClick={handleAdd} disabled={todo.length <=3}>Save</button>
        </div>
        <input type="checkbox" checked={showFinished} onChange={toggleFinished} className="mx-5"/>Show Finished
        <h2 className="font-bold text-lg underline decoration-orange-600 my-4">Your Todos</h2>

        <div className="todo flex md:w-1/2 justify-between flex-col w-full">
          {todos.length === 0 && <div className="m-5">No todos to display</div>}
          {todos.map(item => {

            return (
              (showFinished || !item.isCompleted) && <div key={item.id} className="flex justify-between my-2 items-center">
                <div className="flex gap-5">
                  <input onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} />
                  <div className={`${item.isCompleted ? 'line-through' : ''} todo-text`}>{item.todo}</div>
                </div>
                <div className="buttons mx-4 flex h-full">
                  <button type="button" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-1 text-lg" onClick={(e) => { handleEdit(e, item.id) }}><CiEdit /></button>
                  <button type="button" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-1 text-lg" onClick={(e) => { handleDelete(e, item.id) }}><MdDelete /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
