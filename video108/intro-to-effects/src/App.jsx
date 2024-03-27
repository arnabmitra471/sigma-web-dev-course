import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [color,setColor] = useState(0)

  
/* This will run every time the count state variable changes 
and the entire App component will get re rendered but react will update only those 
parts of the DOM which need to be update
*/
  useEffect(()=>{
    alert("Count was changed")
    setColor(color + 1)
    
  },[count])

  
  return (
    <>
    <Navbar color={"navy "+"blue"+ color} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
