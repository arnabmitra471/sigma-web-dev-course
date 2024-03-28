import React from 'react'

function Card({data}) {
  return (
    <>
    <div className="card border-2 border-yellow-500 m-4 w-1/4 p-5 bg-purple-400 rounded-lg overflow-scroll h-[25vw]">
        {data.map((item,id)=>{
          return(
            <div key={id}>
              {item.id}
              {item.title}
              {item.body}
              </div>
              
          )
        })}
        <button className="bg-blue-600 m-4 p-[10px] rounded-lg text-white font-bold">Click me</button>
    </div>
    </>
  )
}

export default Card