import { useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const num1 = useRef(0);
  const btnRef = useRef(null);


  useEffect(()=>{
    console.log("Count was changed rendering the app component")
    num1.current = num1.current + 1;
    console.log(`The value of num1 is ${num1.current}`)
    console.log(`The value of count is ${count}`)

    return ()=>{
      console.log("App component was unmounted")
    }
  })
  useEffect(()=>{
    console.log("First rendering")
    btnRef.current.style.backgroundColor = "red";
    btnRef.current.style.color = "white";
  },[])

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
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
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
