import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';

const About = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  const typingSpeed = 5;
  const eraseDelay = 7000;
  const paragraphHeight = 70;
  const initialDelay = 500;

  const aboutLines = [
    "aboutLine1",
    "aboutLine2",
    "aboutLine3",
    "aboutLine4",
    "aboutLine5"
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let eraseTimer;

    const typeLine = () => {
      setText((prevText) => t(aboutLines[lineIndex]).substring(0, charIndex + 1));
      charIndex++;

      if (charIndex <= t(aboutLines[lineIndex]).length) {
        setTimeout(typeLine, typingSpeed);
      } else {
        eraseTimer = setTimeout(eraseLine, eraseDelay);
      }
    };

    const eraseLine = () => {
      setText((prevText) => t(aboutLines[lineIndex]).substring(0, charIndex - 1));
      charIndex--;

      if (charIndex >= 0) {
        setTimeout(eraseLine, typingSpeed);
      } else {
        lineIndex = (lineIndex + 1) % aboutLines.length;
        charIndex = 0;
        setTimeout(typeLine, typingSpeed);
      }
    };

    const startTypewriter = () => {
      setTimeout(typeLine, initialDelay);
    };

    startTypewriter();

    return () => clearTimeout(eraseTimer);
  }, [t]);

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
        <p className="typewriter" style={{ height: paragraphHeight }}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </p>
      </div>
    </section>
  );
};

export default About;
