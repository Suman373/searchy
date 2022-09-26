import React from 'react'
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <nav className='nav-container'>
            <a href="#" className='logo'>Searchy</a>
            <a href="#"  className='nav-item'>Docs</a>
            <a href="#"  className='nav-item'>FAQs</a>
            <a href="#"  className='nav-item'>Support</a>
        </nav>
    </div>
  )
}

export default Navbar;
