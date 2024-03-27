import React, { useEffect } from "react"
const Navbar = ({color}) => {

  // This runs on every render
  useEffect(()=>{
    alert(" Hey I will run on every render")
  })

  // This runs only on first render
  useEffect(()=>{
    alert("Hey welcome to my page This is first render!!")

  },[])
// This runs evryone the color prop changes
  useEffect(()=>{
    alert("color was changed")
  },[color]);

  // Example of cleanup function
  useEffect(()=>{
    alert("This is the first render of app.jsx")

    return ()=>{
      alert("component was unmounted")
    }
  },[]);
  
  return (
    <div>
        I am Navbar of {color} color
    </div>
  )
}


export default Navbar
