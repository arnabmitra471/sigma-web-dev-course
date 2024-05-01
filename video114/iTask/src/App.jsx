import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  // Get all the todos from the local storage
  useEffect(() => {

    const todoString = localStorage.getItem("todos");
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
  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 my-5 p-5 rounded min-h-[80vh]">

        <div className="addTodo">
          <h2 className="font-bold text-lg my-5">Add Todo</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder="Enter todo title" className="p-2 hover:bg-green-500 hover:text-white text-green-500 placeholder-green-500 hover:placeholder-white w-1/2 border-2 rounded-md border-purple-400 transition-colors" />
          <button type="submit" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-6 text-lg" onClick={handleAdd}>Save</button>
        </div>
        <h2 className="font-bold text-lg underline decoration-orange-600">Your Todos</h2>

        <div className="todo flex w-1/2 justify-between flex-col">
          {todos.length === 0 && <div className="m-5">No todos to display</div>}
          {todos.map(item => {

            return (
              <div key={item.id} className="flex justify-between my-2 items-center">
                <div className="flex gap-5">
                  <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} />
                  <div className={`${item.isCompleted ? 'line-through' : ''} todo-text`}>{item.todo}</div>
                </div>
                <div className="buttons mx-4 flex h-full">
                  <button type="button" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-1 text-lg" onClick={(e) => { handleEdit(e, item.id) }}>Edit</button>
                  <button type="button" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-1 text-lg" onClick={(e) => { handleDelete(e, item.id) }}>Delete</button>
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
