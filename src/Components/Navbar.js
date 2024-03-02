// FabMenu.js
import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file

const FabMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`fab fabVertical ${isActive ? 'active' : ''}`}>
      <div className="fabNav fabNav--left">
        <a href="#about" className="fabItem ic-about">
          <span className="fabTooltip">About Me</span>
           <i className="fas fa-user"></i> {/* Font Awesome icon for user */}
        </a>
        <a href="#education" className="fabItem ic-education">
    <span className="fabTooltip">Education</span>
    <i className="fas fa-graduation-cap"></i> {/* Font Awesome icon for graduation cap */}
  </a>
  <a href="#skills" className="fabItem ic-skills">
            <span className="fabTooltip">Skills</span>
            <i className="fas fa-tools"></i> {/* Font Awesome icon for tools */}
          </a>
      </div>
      <div className="fabTrigger" onClick={toggleMenu}>
        <a href="#">
          <span className="hamburger-icon"></span>
        </a>
      </div>
      <div className="fabNav fabNav--right">
      <a href="#Projects" className="fabItem ic-projects">
            <span className="fabTooltip">Projects</span>
            <i className="fas fa-project-diagram"></i> {/* Font Awesome icon for project diagram */}
          </a>
          <a href="https://github.com/Evan-khalil" className="fabItem ic-github">
  <span className="fabTooltip">Github</span>
  <i className="fas fa-code"></i> {/* Font Awesome icon for code */}
</a>

<a href="https://se.linkedin.com/in/evan-khalil-0a6013164" className="fabItem ic-linkedin">
  <span className="fabTooltip">LinkedIn</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
    <path d="M19.35 2H4.65C3.74 2 3 2.74 3 3.65v16.7C3 21.26 3.74 22 4.65 22h14.7c.92 0 1.65-.74 1.65-1.65V3.65C21 2.74 20.26 2 19.35 2zM8.94 18.05H6.33V10.9h2.61v7.15h-.01zm-1.31-8.25a1.55 1.55 0 01-1.55-1.55 1.55 1.55 0 111.55 1.55zm10.67 8.25h-2.6v-4.74c0-1.13-.02-2.58-1.58-2.58-1.58 0-1.82 1.24-1.82 2.52v4.8h-2.6V10.9h2.49v1.34h.03c.35-.67 1.2-1.38 2.46-1.38 2.64 0 3.12 1.74 3.12 4v4.19z"/>
  </svg>
</a>

      </div>
    </div>
  );
};

export default FabMenu;
