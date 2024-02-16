// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className="navbar-links">
        <li><Link to="about" smooth={true} duration={500} onClick={() => setIsNavbarOpen(false)}>About</Link></li>
        <li><Link to="education" smooth={true} duration={500} onClick={() => setIsNavbarOpen(false)}>Education</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsNavbarOpen(false)}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => setIsNavbarOpen(false)}>Skills</Link></li>
        <li><Link to="software" smooth={true} duration={500} onClick={() => setIsNavbarOpen(false)}>Software</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsNavbarOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
