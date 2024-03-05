import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const CircularMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: window.innerWidth - 70, y: window.innerHeight / 2 });
  const [showDragMessage, setShowDragMessage] = useState(true); // New state for showing drag message
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
        setShowDragMessage(false); // Hide drag message when dragging starts
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
        setShowDragMessage(false); // Hide drag message when dragging starts
      }
    };

    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
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

  const handleMenuHover = () => {
    setIsActive(!isActive);
    setShowDragMessage(false);
  };

  const handleMenuLeave = () => {
    setIsActive(false);
  };

  const handleMenuItemHover = (event) => {
    event.preventDefault();
    event.target.click();
  };

  return (
    <div
      className={`circular-menu ${isActive ? 'active' : ''}`}
      ref={menuRef}
      style={{ left: position.x, top: position.y }}
      onMouseEnter={handleMenuHover} // Changed to onMouseEnter
      onMouseLeave={handleMenuLeave} // Added onMouseLeave
      onMouseDown={handleMouseDown} // Added for drag functionality
      onTouchStart={handleTouchStart}
    >
      {/* Added animation for drag message */}
      {showDragMessage && (
        <div className="drag-message">
          <div className="arroww"></div>
          <div className="message">Drag me!</div>
        </div>
      )}
      <div className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isActive && (
        <div className="menu-items">
          <a href="#about" className="fabItem ic-about menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">About Me</span>
            <i className="fas fa-user"></i>
          </a>
          <a href="#education" className="fabItem ic-education menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">Education</span>
            <i className="fas fa-graduation-cap"></i>
          </a>
          <a href="#skills" className="fabItem ic-skills menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">Skills</span>
            <i className="fas fa-tools"></i>
          </a>
          <a href="#Projects" className="fabItem ic-projects menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">Projects</span>
            <i className="fas fa-project-diagram"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default CircularMenu;
