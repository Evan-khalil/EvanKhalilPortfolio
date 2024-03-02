import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const CircularMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: window.innerWidth - 70, y: window.innerHeight / 2 });
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragging) {
        const maxX = window.innerWidth - menuRef.current.offsetWidth;
        const maxY = window.innerHeight - menuRef.current.offsetHeight;
        
        const x = Math.min(Math.max(0, event.clientX - offset.x), maxX);
        const y = Math.min(Math.max(0, event.clientY - offset.y), maxY);

        setPosition({ x, y });
      }
    };

    const handleMouseUp = () => {
      if (dragging) {
        setDragging(false);
      }
    };

    const handleTouchMove = (event) => {
      event.preventDefault(); // Prevent default behavior (scrolling)
      if (dragging) {
        const maxX = window.innerWidth - menuRef.current.offsetWidth;
        const maxY = window.innerHeight - menuRef.current.offsetHeight;
        
        const touch = event.touches[0];
        const x = Math.min(Math.max(0, touch.clientX - offset.x), maxX);
        const y = Math.min(Math.max(0, touch.clientY - offset.y), maxY);

        setPosition({ x, y });
      }
    };

    const handleTouchEnd = () => {
      if (dragging) {
        setDragging(false);
      }
    };

    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, offset]);

  const handleMouseDown = (event) => {
    const rect = menuRef.current.getBoundingClientRect();
    setOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
    setDragging(true);
  };

  const handleTouchStart = (event) => {
    event.preventDefault(); // Prevent default behavior (scrolling)
    const rect = menuRef.current.getBoundingClientRect();
    const touch = event.touches[0];
    setOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    setDragging(true);
  };

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`circular-menu ${isActive ? 'active' : ''}`}
      ref={menuRef}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="menu-icon" onClick={handleMenuClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isActive && (
        <div className="menu-items">
  <a href="#about" className="fabItem ic-about menu-item" style={{ marginBottom: '25PX' }}>
    <span className="fabTooltip">About Me</span>
    <i className="fas fa-user"></i>
  </a>
  <a href="#education" className="fabItem ic-education menu-item" style={{ marginBottom: '25PX' }}>
    <span className="fabTooltip">Education</span>
    <i className="fas fa-graduation-cap"></i>
  </a>
  <a href="#skills" className="fabItem ic-skills menu-item" style={{ marginBottom: '25PX' }}>
    <span className="fabTooltip">Skills</span>
    <i className="fas fa-tools"></i>
  </a>
  <a href="#Projects" className="fabItem ic-projects menu-item" style={{ marginBottom: '25PX' }}>
    <span className="fabTooltip">Projects</span>
    <i className="fas fa-project-diagram"></i>
  </a>
  <a href="https://github.com/Evan-khalil" className="fabItem ic-github menu-item" style={{ marginBottom: '25PX' }}>
    <span className="fabTooltip">Github</span>
    <i className="fas fa-code"></i>
  </a>
  <a href="https://se.linkedin.com/in/evan-khalil-0a6013164" className="fabItem ic-linkedin menu-item" style={{ marginBottom: '25PX' }}>
    <span className="fabTooltip" >LinkedIn</span>
    <i className="fab fa-linkedin"></i>
  </a>
</div>

      )}
    </div>
  );
};

export default CircularMenu;
