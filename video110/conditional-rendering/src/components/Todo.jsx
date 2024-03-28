import React, { useState } from 'react'

export default function Todo({todo}) {
    const [todos,setTodos] = useState([
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
    ])
  return (
    <>
    <div>
       {todos.map((todo,index)=>{
            return(
                <div key={index}>
                    <h2>{todo.title}</h2>
                    <p>{todo.desc}</p> 
                </div>
            )
       })} 
    </div>
    </>
  )
}

