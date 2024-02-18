import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const [pageLoaded, setPageLoaded] = useState(false); // Track whether the page has loaded
  const aboutLines = [
    "Welcome to my portfolio website! My name is Evan Khalil and I am a recent graduate of the Information Systems program at Örebro University",
    "I am excited to embark on my career as a system developer and am eager to take my first step in the field",
    "I am a highly motivated individual who is driven by a desire to continuously develop my skills. I believe that by streamlining and systemizing work processes, we can achieve a better quality of life. My experience in the field of information systems has taught me the importance of attention to detail, critical thinking, and problem-solving skills. I am confident that I can apply these skills to any project and help make it a success",
    "As you explore my website, you will find examples of my past work and accomplishments. I am proud of what I have learned so far and am excited for the future",
    "If you have any questions or would like to discuss any potential opportunities, please don't hesitate to reach out to me. Thank you for visiting my website."
  ];
  const typingSpeed = 10;
  const eraseDelay = 3000;

  useEffect(() => {
    if (!pageLoaded) return; // If the page hasn't loaded, do nothing

    let lineIndex = 0;
    let charIndex = 0;
    let eraseTimer;

    const typeLine = () => {
      if (charIndex <= aboutLines[lineIndex].length) {
        setText(aboutLines[lineIndex].substring(0, charIndex));
        charIndex++;
        setTimeout(typeLine, typingSpeed);
      } else {
        eraseTimer = setTimeout(eraseLine, eraseDelay);
      }
    };

    const eraseLine = () => {
      if (charIndex >= 0) {
        setText(aboutLines[lineIndex].substring(0, charIndex));
        charIndex--;
        setTimeout(eraseLine, typingSpeed);
      } else {
        lineIndex++;
        charIndex = 0;
        if (lineIndex >= aboutLines.length) {
          lineIndex = 0;
        }
        setTimeout(typeLine, typingSpeed);
      }
    };

    typeLine();

    return () => clearTimeout(eraseTimer);
  }, [pageLoaded]); // Run the effect when pageLoaded changes

  useEffect(() => {
    // Set pageLoaded to true when the component mounts
    setPageLoaded(true);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1>About Me</h1>
        <p className="typewriter" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </section>
  );
};

export default About;
