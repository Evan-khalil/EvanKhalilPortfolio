import React, { useEffect, useState, useRef } from 'react';
import './AboutSection.css';

// Component for the About section
const About = () => {
  // State hooks for managing component state
  const [text, setText] = useState(''); // State for displaying typed text
  const [isVisible, setIsVisible] = useState(false); // State to track if section is visible
  const titleRef = useRef(null); // Ref for the title element

  // Array of lines for the about section
  const aboutLines = [
    "Welcome to my portfolio! I'm thrilled to introduce myself as Evan Khalil, a recent graduate from Örebro University's Information Systems program. As I embark on my journey into the realm of system development, I'm brimming with enthusiasm to make my mark in the industry.",
    "Driven by an insatiable thirst for skill enhancement, I consider myself a highly motivated individual. My philosophy revolves around optimizing work processes to enhance our quality of life.",
    "Through my academic journey and practical experiences, I've honed crucial attributes like attention to detail, critical thinking, and problem-solving – qualities I'm eager to apply to every project I undertake.",
    "Within this portfolio, you'll discover a showcase of my past endeavors and achievements. Each represents a stepping stone in my professional growth, and I'm excited about the prospects that lie ahead.",
    "Should you have any inquiries or wish to explore potential collaborations, please feel free to reach out. Thank you for taking the time to visit my portfolio – I appreciate your interest."
  ];

  const typingSpeed = 5; // Speed of typing effect
  const eraseDelay = 7000; // Delay before erasing text
  const paragraphHeight = 70; // Height of the paragraph container
  const initialDelay = 500; // Initial delay before typing starts

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let eraseTimer;

    // Function to type a line of text
    const typeLine = () => {
      setText((prevText) => aboutLines[lineIndex].substring(0, charIndex + 1)); // Add next character
      charIndex++;

      // Check if entire line is typed
      if (charIndex <= aboutLines[lineIndex].length) {
        setTimeout(typeLine, typingSpeed); // Schedule next character typing
      } else {
        eraseTimer = setTimeout(eraseLine, eraseDelay); // Start erasing after delay
      }
    };

    // Function to erase a line of text
    const eraseLine = () => {
      setText((prevText) => aboutLines[lineIndex].substring(0, charIndex - 1)); // Remove last character
      charIndex--;

      // Check if line is completely erased
      if (charIndex >= 0) {
        setTimeout(eraseLine, typingSpeed); // Schedule next character erasing
      } else {
        lineIndex = (lineIndex + 1) % aboutLines.length; // Move to next line
        charIndex = 0; // Reset character index
        setTimeout(typeLine, typingSpeed); // Start typing next line
      }
    };

    // Function to start the typewriter effect
    const startTypewriter = () => {
      setTimeout(typeLine, initialDelay); // Start typing after initial delay
    };

    startTypewriter(); // Start the typewriter effect

    // Cleanup function
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
          setIsVisible(true); // Set section visible
          setTimeout(() => setIsVisible(false), 1000); // Hide after 2 seconds
        } else {
          setIsVisible(false); // Set section not visible
        }
      });
    }, options);

    observer.observe(titleRef.current); // Observe the title element

    // Cleanup function
    return () => {
      observer.unobserve(titleRef.current);
    };
  }, []);

  // Render the About section
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

export default About; // Export the About component
