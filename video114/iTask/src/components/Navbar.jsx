import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-indigo-800 text-white py-2">
        <div className="logo">
            <span className="font-bold text-xl mx-9">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className="cursor-pointer hover:font-bold hover:transition-all duration-200">Home</li>
            <li className="cursor-pointer hover:font-bold hover:transition-all duration-200">Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
