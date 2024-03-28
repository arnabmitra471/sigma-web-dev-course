import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="flex flex-row bg-purple-500 items-center justify-around">
                <div>
                    Bio with Arnab
                </div>
                <ul className="flex flex-row gap-4 p-3 justify-center items-center h-full">
                    <li className="hover:text-white hover:cursor-pointer hover:transition-colors ease-in-out duration-200 hover:bg-slate-400 hover:rounded-full p-[5px]">Home</li>
                    <li className="hover:text-white hover:cursor-pointer hover:transition-colors ease-in-out duration-200 hover:bg-slate-400 hover:rounded-full p-[5px]">About</li>
                    <li className="hover:text-white hover:cursor-pointer hover:transition-colors ease-in-out duration-200 hover:bg-slate-400 hover:rounded-full p-[5px]">Contact</li>
                    <li className="hover:text-white hover:cursor-pointer hover:transition-colors ease-in-out duration-200 hover:bg-slate-400 hover:rounded-full p-[5px]">Services</li>
                    <li className="hover:text-white hover:cursor-pointer hover:transition-colors ease-in-out duration-200 hover:bg-slate-400 hover:rounded-full p-[5px]">Feedback</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar