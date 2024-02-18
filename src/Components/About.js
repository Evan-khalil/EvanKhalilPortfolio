import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const [pageLoaded, setPageLoaded] = useState(false);
  const aboutLines = [
    "Welcome to my portfolio website! My name is Evan Khalil and I am a recent graduate of the Information Systems program at Örebro University",
    "I am excited to embark on my career as a system developer and am eager to take my first step in the field",
    "I am a highly motivated individual who is driven by a desire to continuously develop my skills. I believe that by streamlining and systemizing work processes, we can achieve a better quality of life. My experience in the field of information systems has taught me the importance of attention to detail, critical thinking, and problem-solving skills. I am confident that I can apply these skills to any project and help make it a success",
    "As you explore my website, you will find examples of my past work and accomplishments. I am proud of what I have learned so far and am excited for the future",
    "If you have any questions or would like to discuss any potential opportunities, please don't hesitate to reach out to me. Thank you for visiting my website."
  ];
  const typingSpeed = 10;
  const eraseDelay = 3000;
  const paragraphHeight = 70; // Adjust the height as needed

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let eraseTimer;
    let animationFrame;

    const typeLine = () => {
      setText(aboutLines[lineIndex].substring(0, charIndex));
      charIndex++;

      if (charIndex <= aboutLines[lineIndex].length) {
        animationFrame = requestAnimationFrame(typeLine);
      } else {
        eraseTimer = setTimeout(eraseLine, eraseDelay);
      }
    };

    const eraseLine = () => {
      setText(aboutLines[lineIndex].substring(0, charIndex));
      charIndex--;

      if (charIndex >= 0) {
        animationFrame = requestAnimationFrame(eraseLine);
      } else {
        lineIndex = (lineIndex + 1) % aboutLines.length;
        charIndex = 0;
        animationFrame = requestAnimationFrame(typeLine);
      }
    };

    const startTypewriter = () => {
      if (pageLoaded) {
        typeLine();
      }
    };

    startTypewriter();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(eraseTimer);
    };
  }, [pageLoaded]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1>About Me</h1>
        <p className="typewriter" style={{ height: paragraphHeight }}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </p>
      </div>
    </section>
  );
};

export default About;
