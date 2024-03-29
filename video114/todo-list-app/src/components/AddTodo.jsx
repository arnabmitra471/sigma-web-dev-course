import React from 'react'

const AddTodo = () => {
  const handleAdd = ()=>{
    
  }
  return (
    <>
    <div className='flex flex-col justify-start items-start'>
      <h2 className='my-5'>Add a Todo</h2>
      <label htmlFor="title" className="font-semibold">Enter Task Title</label>
      <input type='text' className="w-1/2 p-3 text-green-500 placeholder-purple-600 m-3" id="title" placeholder="Enter Task Title"/>

      <label htmlFor="description" className="font-semibold">Enter Task Description</label>
      <input type='text' className="w-1/2 p-3 text-green-500 placeholder-purple-600 m-3" id="description" placeholder="Enter Task description"/>
    </div>
      <button className='bg-violet-600 rounded-lg p-2 hover:bg-green-600 hover:transition-colors duration-200 hover:scale-90' onClick={handleAdd}>Add</button>
      </>
  )
}

export default AddTodo
