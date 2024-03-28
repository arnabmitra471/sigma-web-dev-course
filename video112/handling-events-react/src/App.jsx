import { useState } from 'react';
import './App.css'

function App() {
 
  // event handler functions
  
  const [form,setForm] = useState({email: "", password:""})

    const handleClick = ()=>{
      console.log("Hey I am clicked !!");
      
    }
    let handleMouseOver = ()=>{
      console.log("Hey you just hovered over this div !!")
    }
    let handleMouseLeave = ()=>{
        console.log("Your mouse left this div")
    }
    const handleChange = (e)=>{
      setForm({...form,[e.target.name]:e.target.value})
      console.log(form)
    }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        Hover over this div
      </div>
      {/* handling events on inputs */}

      

      <input type="email" name="email" value={form.email } onChange={handleChange}/>
      <input type="password" name="password"value={form.password} onChange={handleChange}/>
    </>
  )
}

export default App
