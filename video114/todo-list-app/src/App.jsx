import Navbar from "./components/Navbar"
import AddTodo from "./components/AddTodo"
function App() {

  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{

  }
  return (
    <>
        <Navbar/>
      <div className="container mx-auto bg-violet-100 my-5 rounded-xl p-5 min-h-[80vh]">
        
        <div className="text-lg font-bold">
          <AddTodo/>
          <h2>Your Todos</h2>
        </div>
        <div className="todo flex flex-row gap-3">
          <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quod.</div>
          <div className="buttons flex flex-row gap-3">
          <button className="bg-blue-600 mx-1 px-4 rounded-lg hover:scale-90 hover:transition-colors hover:bg-purple-500" onClick={handleEdit}>Edit</button>
          <button className="bg-red-600 mx-1 px-4 rounded-lg hover:scale-90 hover:transition-colors hover:bg-red-400 duration-200" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
