"use client"
import { useState,useEffect } from "react"
import fs from "fs/promises"

export default function Home() {
  const [count,setCount] = useState(0);
  console.log("Hey I am Arnab !!")
  return (
    <div>
      I am a component {count} <br/>
      <button onClick={()=>{setCount(count + 1)}}>Click to update count</button>
      
  
    </div>
  )
}
