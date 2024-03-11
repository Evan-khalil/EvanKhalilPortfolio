import React, { useState, useRef, useEffect } from 'react';
import './MenySection.css';

// Functional component for Circular Menu
const CircularMenu = () => {
  // State hooks for managing component state
  const [isActive, setIsActive] = useState(false); // State to toggle menu active/inactive
  const [dragging, setDragging] = useState(false); // State to track dragging state
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // State to store offset while dragging
  const [position, setPosition] = useState({ x: window.innerWidth - 70, y: window.innerHeight / 2 }); // State to manage menu position
  const [showDragMessage, setShowDragMessage] = useState(true); // State to show/hide drag message
  const menuRef = useRef(null); // Ref to store reference to menu element

  // Effect hook to handle mouse and touch events
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update menu position while dragging
      if (dragging) {
        const maxX = window.innerWidth - menuRef.current.offsetWidth;
        const maxY = window.innerHeight - menuRef.current.offsetHeight;
        const x = Math.min(Math.max(0, event.clientX - offset.x), maxX);
        const y = Math.min(Math.max(0, event.clientY - offset.y), maxY);
        setPosition({ x, y });
      }
    };

    const handleMouseUp = () => {
      // Stop dragging on mouse up
      if (dragging) {
        setDragging(false);
        setShowDragMessage(false); // Hide drag message when dragging starts
      }
    };

    const handleTouchMove = (event) => {
      // Prevent scrolling and update menu position while touching
      event.preventDefault();
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
      // Stop dragging on touch end
      if (dragging) {
        setDragging(false);
        setShowDragMessage(false); // Hide drag message when dragging starts
      }
    };

    const handleResize = () => {
      // Update menu position on window resize
      setPosition((prevPosition) => {
        const maxX = window.innerWidth - menuRef.current.offsetWidth;
        const maxY = window.innerHeight - menuRef.current.offsetHeight;
        const x = Math.min(prevPosition.x, maxX);
        const y = Math.min(prevPosition.y, maxY);
        return { x, y };
      });
    };

    // Add event listeners for mouse, touch, and resize
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [dragging, offset]);

  // Event handler for mouse down to start dragging
  const handleMouseDown = (event) => {
    const rect = menuRef.current.getBoundingClientRect();
    setOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
    setDragging(true);
  };

  // Event handler for touch start to start dragging
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

  // Event handler for menu hover to toggle active state
  const handleMenuHover = () => {
    setIsActive(!isActive);
    setShowDragMessage(false);
  };

  // Event handler for mouse leave to deactivate menu
  const handleMenuLeave = () => {
    setIsActive(false);
  };

  // Event handler for menu item hover to scroll to section
  const handleMenuItemHover = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1); // Get the target section id
    const targetSection = document.getElementById(targetId); // Get the target section element
    if (targetSection) {
      let scrollOptions = {
        behavior: 'smooth',
        block: 'center', // Scroll to the center of the target section by default
      };
      if (targetId === 'Projects') {
        scrollOptions.block = 'end'; // For the Projects section, scroll to the end
      }
      targetSection.scrollIntoView(scrollOptions); // Scroll to the target section
    }
  };

  // Render the Circular Menu component
  return (
    <div
      className={`circular-menu ${isActive ? 'active' : ''}`}
      ref={menuRef}
      style={{ left: position.x, top: position.y }}
      onMouseEnter={handleMenuHover} // Trigger menu hover effect
      onMouseLeave={handleMenuLeave} // Trigger menu leave effect
      onMouseDown={handleMouseDown} // Trigger mouse down for drag functionality
      onTouchStart={handleTouchStart} // Trigger touch start for drag functionality
    >
      {/* Display drag message */}
      {showDragMessage && (
        <div className="drag-message">
          <div className="arroww"></div>
          <div className="message">Drag me!</div>
        </div>
      )}
      {/* Menu icon */}
      <div className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* Menu items */}
      {isActive && (
        <div className="menu-items">
          {/* Menu item links */}
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
          {/* External links */}
          <a href="https://github.com/Evan-khalil" className="fabItem ic-github menu-item">
            <span className="fabTooltip">Github</span>
            <i className="fas fa-code"></i>
          </a>
          <a href="https://se.linkedin.com/in/evan-khalil-0a6013164" className="fabItem ic-linkedin menu-item">
            <span className="fabTooltip" >LinkedIn</span>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default CircularMenu; // Export the CircularMenu component
