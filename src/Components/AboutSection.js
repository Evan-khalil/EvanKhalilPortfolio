import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; 
import './AboutSection.css';

const About = () => {
  const { t } = useTranslation(); 
  const [isVisible, setIsVisible] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const lines = [
    t('aboutLine1'),
    t('aboutLine2'),
    t('aboutLine3'),
    t('aboutLine4'),
    t('aboutLine5')
  ];
  const titleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 1000);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(titleRef.current);
    return () => {
      observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`vertical-title ${isVisible ? 'show-title' : ''}`}>
          <h1 ref={titleRef} id='title'>{t('about')}</h1> 
        </div>
        <div className="about-text">
          {lines.map((line, index) => (
            <div key={index} className={`about-line ${index === currentLineIndex ? 'visible' : ''}`}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
