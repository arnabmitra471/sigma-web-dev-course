import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { CounterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterContext.Provider value={{count,setCount}}>
      <Navbar/>
      <div>The value of count is {count}</div>
      <button type="button" onClick={()=>{setCount(count + 1)}}>Click to update the count</button>

      </CounterContext.Provider>
    </>
  )
}

export default App
