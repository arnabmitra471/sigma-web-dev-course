import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn,setShowBtn] = useState(false)

  const todos = [
    {
        title: "Hey I am first todo",
        desc: "I am a good todo"
    },
    {
        title: "Hey I am another todo",
        desc: "This is yet another todo awesome !!!"
    },
    {
        title: "Hey I am third todo",
        desc: "Description of third todo awesome !!"
    }
]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn ?<button>I will be shown only on clicking another button</button>:""} */}

      {showBtn && <button>I will be shown only on clicking another button</button>}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          count is {count}
        </button>
        <Todo todo={ todos }/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
