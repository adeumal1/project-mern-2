import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li><a href="">Current</a></li>
          <li><a href="">Cities</a></li>
          <li><a href="">Forecast</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar