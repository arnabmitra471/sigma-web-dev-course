import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 my-5 p-5 rounded">
        
        <div className="addTodo">
          <h2 className="font-bold text-lg">Add Todo</h2>
          
        </div>
        <h2 className="font-bold text-lg underline decoration-orange-600">Your Todos</h2>
          <div className="todo">

          </div>
      </div>
    </>
  )
}

export default App
