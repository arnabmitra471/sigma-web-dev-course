import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }
  const handleEdit = () => {

  }
  const handleDelete = (e, id) => {
    console.log(`The todo id is ${id}`)
    let deleteTodoConf = confirm("Are you really sure you want to delete this todo ??")

    if (deleteTodoConf) {
      let newTodos = todos.filter((item) => {
        return item.id !== id
      })
      setTodos(newTodos)
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
    console.log(index)
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    console.log(newTodos)

  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 my-5 p-5 rounded min-h-[80vh]">

        <div className="addTodo">
          <h2 className="font-bold text-lg my-5">Add Todo</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder="Enter todo title" className="p-2 hover:bg-green-500 hover:text-white text-green-500 placeholder-green-500 hover:placeholder-white w-1/2 border-2 rounded-md border-purple-400 transition-colors" />
          <button type="submit" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-6 text-lg" onClick={handleAdd}>Add</button>
        </div>
        <h2 className="font-bold text-lg underline decoration-orange-600">Your Todos</h2>

        <div className="todo flex w-1/2 justify-between flex-col">
          {todos.map(item => {

            return (
              <div key={item.id} className="flex justify-between my-2 items-center">
                <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} />
                <div className={`${item.isCompleted ? 'line-through' : ''}`}>{item.todo}</div>
                <div className="buttons mx-4">
                  <button type="button" className="m-4 px-2 py-1 bg-violet-600 hover:bg-violet-950 text-white rounded-md mx-1 text-lg" onClick={handleEdit}>Edit</button>
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
