import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="logo">
            OluFemi
        </div>
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar