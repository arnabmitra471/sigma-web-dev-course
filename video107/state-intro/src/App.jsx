import './App.css'
import { useState } from 'react'
function App() {
    const [count,setCount] = useState(0)
  return (
    <>
     <div>The count is {count}</div>
     <button onClick={()=>{setCount(count + 1)}}>Click to update count</button> 
    </>
  )
}

export default App
