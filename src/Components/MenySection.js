import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import './MenySection.css';

const CircularMenu = () => {
  const { t } = useTranslation(); 
  const [isActive, setIsActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: window.innerWidth - 70, y: window.innerHeight / 2 });
  const [showDragMessage, setShowDragMessage] = useState(true);
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
        setShowDragMessage(false);
      }
    };

    const handleTouchMove = (event) => {
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
      if (dragging) {
        setDragging(false);
        setShowDragMessage(false);
      }
    };

    const handleResize = () => {
      setPosition((prevPosition) => {
        const maxX = window.innerWidth - menuRef.current.offsetWidth;
        const maxY = window.innerHeight - menuRef.current.offsetHeight;
        const x = Math.min(prevPosition.x, maxX);
        const y = Math.min(prevPosition.y, maxY);
        return { x, y };
      });
    };

    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
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
    event.preventDefault();
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
    const targetId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      let scrollOptions = {
        behavior: 'smooth',
        block: 'center',
      };
      if (targetId === 'Projects') {
        scrollOptions.block = 'end';
      }
      targetSection.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div
      className={`circular-menu ${isActive ? 'active' : ''}`}
      ref={menuRef}
      style={{ left: position.x, top: position.y }}
      onMouseEnter={handleMenuHover}
      onMouseLeave={handleMenuLeave}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {showDragMessage && (
        <div className="drag-message">
          <div className="arroww"></div>
          <div className="message">{t('menu.drag_message')}</div>
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
            <span className="fabTooltip">{t('menu.about')}</span>
            <i className="fas fa-user"></i>
          </a>
          <a href="#education" className="fabItem ic-education menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">{t('menu.education')}</span>
            <i className="fas fa-graduation-cap"></i>
          </a>
          <a href="#skills" className="fabItem ic-skills menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">{t('menu.skills')}</span>
            <i className="fas fa-tools"></i>
          </a>
          <a href="#Projects" className="fabItem ic-projects menu-item" onMouseEnter={handleMenuItemHover}>
            <span className="fabTooltip">{t('menu.projects')}</span>
            <i className="fas fa-project-diagram"></i>
          </a>
          <a href="https://github.com/Evan-khalil" className="fabItem ic-github menu-item">
            <span className="fabTooltip">{t('menu.github')}</span>
            <i className="fas fa-code"></i>
          </a>
          <a href="https://se.linkedin.com/in/evan-khalil-0a6013164" className="fabItem ic-linkedin menu-item">
            <span className="fabTooltip" >{t('menu.linkedin')}</span>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default CircularMenu;
