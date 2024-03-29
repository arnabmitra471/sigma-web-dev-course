import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-700 text-white py-2">

      <div className="logo font-bold text-xl mx-9">
        <span>iTask</span>
      </div>
      <ul className="flex gap-8 text-xl mx-9">
        <li className='cursor-pointer hover:font-bold hover:underline transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold hover:underline transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
