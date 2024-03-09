import React, { useEffect, useState, useRef } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null); // Ref for the title element

  const aboutLines = [
    "Welcome to my portfolio website! My name is Evan Khalil and I am a recent graduate of the Information Systems program at Örebro University.",
    "I am excited to embark on my career as a system developer and am eager to take my first step in the field.",
    "I am a highly motivated individual who is driven by a desire to continuously develop my skills. I believe that by streamlining and systemizing work processes, we can achieve a better quality of life. My experience in the field of information systems has taught me the importance of attention to detail, critical thinking, and problem-solving skills. I am confident that I can apply these skills to any project and help make it a success.",
    "As you explore my website, you will find examples of my past work and accomplishments. I am proud of what I have learned so far and am excited for the future.",
    "If you have any questions or would like to discuss any potential opportunities, please don't hesitate to reach out to me. Thank you for visiting my website."
  ];

  const typingSpeed = 5; // Adjust the typing speed as needed
  const eraseDelay = 7000;
  const paragraphHeight = 70; // Adjust the height as needed
  const initialDelay = 500; // Adjust the initial delay time in milliseconds

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let eraseTimer;

    const typeLine = () => {
      setText((prevText) => aboutLines[lineIndex].substring(0, charIndex + 1)); // Adjusted to include next character
      charIndex++;

      if (charIndex <= aboutLines[lineIndex].length) {
        setTimeout(typeLine, typingSpeed); // Use setTimeout for consistent interval
      } else {
        eraseTimer = setTimeout(eraseLine, eraseDelay);
      }
    };

    const eraseLine = () => {
      setText((prevText) => aboutLines[lineIndex].substring(0, charIndex - 1)); // Adjusted to remove last character
      charIndex--;

      if (charIndex >= 0) {
        setTimeout(eraseLine, typingSpeed); // Use setTimeout for consistent interval
      } else {
        lineIndex = (lineIndex + 1) % aboutLines.length;
        charIndex = 0;
        setTimeout(typeLine, typingSpeed); // Use setTimeout for consistent interval
      }
    };

    const startTypewriter = () => {
      // Start typewriter effect after initial delay
      setTimeout(typeLine, initialDelay);
    };

    startTypewriter();

    return () => clearTimeout(eraseTimer);
  }, []);

  // Intersection Observer to check if the section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 500); // Hide after 2 seconds
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(titleRef.current);

    // Cleanup function
    return () => {
      observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`vertical-title ${isVisible ? 'show-title' : ''}`}>
          <h1 ref={titleRef} id='title'>About</h1>
        </div>
        <p className="typewriter" style={{ height: paragraphHeight }}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </p>
      </div>
    </section>
  );
};

export default About;
