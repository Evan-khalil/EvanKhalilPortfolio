// CircularMenu.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function CircularMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`circular-menu ${isActive ? 'active' : ''}`}>
      <a className="floating-btn" onClick={toggleMenu}>
        <i className={`fa ${isActive ? 'fa-bars' : 'fa-plus'}`}></i>
      </a>
      <menu className="items-wrapper">
        <Link to="about" smooth={true} duration={500} className="menu-item fa fa-info-circle"></Link>
        <Link to="timeline" smooth={true} duration={500} className="menu-item fa fa-graduation-cap"></Link>
        <Link to="Projects" smooth={true} duration={500} className="menu-item fa fa-folder-open"></Link>
        <Link to="#" smooth={true} duration={500} className="menu-item fa fa-cogs"></Link>
      </menu>
    </div>
  );
}

export default CircularMenu;
