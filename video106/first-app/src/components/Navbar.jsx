import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
                <input type='search' placeholder='Search here' className="search"></input>
            </nav>
        </div>
    )
}

export default Navbar
