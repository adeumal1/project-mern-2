import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li><Link to="/">Location</Link></li>
          <li><Link to="/cities">Cities</Link></li>
          <li><Link to="/forecast">Forecast</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar