import React, { useEffect, useState, useRef } from 'react';
import './Edu.css';

const Title = ({ isVisible }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      titleRef.current.classList.add('show-title');
    } else {
      titleRef.current.classList.remove('show-title');
    }
  }, [isVisible]);

  return (
    <div className={`vertical-title ${isVisible ? 'show-title' : ''}`} style={{ zIndex: 2 }}> {/* Add zIndex */}
      <h1 ref={titleRef} id='eduTitle'>Education</h1>
    </div>
  );
};

const FlipCard = ({ frontColor, backTitle, backContent, additionalText, backColor }) => {
  return (
    <div className="flip">
      <div className="front" style={{ backgroundColor: frontColor }}>
        <h1 className="text-shadow">{backTitle}</h1>
      </div>
      <div className="back" style={{ backgroundColor: backColor }}>
        <h2>{backTitle}</h2>
        <p>{backContent}</p>
        <span className="additional-text">{additionalText}</span> {/* Additional text */}
      </div>
    </div>
  );
};

const CenteredFlipCards = () => {
  const [isVisible, setIsVisible] = useState(false); // State variable to control visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const timeout = setTimeout(() => {
              setIsVisible(false);
            }, 500);
            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById('eduTitle')); // Change ID here

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" style={{ position: 'relative' }}>
      <Title isVisible={isVisible} />
      <div className="center-container">
        <div className="flip-container">
          <FlipCard
            frontColor="#F5DEB3"
            backColor="#BC8F8F"
            backTitle="Bachelor's programme in Information Systems"
            backContent="Knowledge about people, organizations, and how to develop technology to support them alongside learning the basics of systems analysis and software development. The program offers courses in object-oriented analysis and design, agile methods, interaction design, database management, and programming in C# and Java."
            additionalText="Örebro University"
          />
          <FlipCard
            frontColor="#BC8F8F"
            backColor="#D2B48C"
            backTitle="Programming for Internet"
            backContent="Gain expertise in using C# to program with supportive technologies, establish low-level connections to various servers, establish high-level connections to specialized servers like email, web, and database servers, and ensure security while communicating over the internet."
            additionalText="Stockholm University"
          />
          <FlipCard
            frontColor="#DEB887"
            backColor="#F5DEB3"
            backTitle="Web Development II"
            backContent="Learn to build sophisticated web-based systems using JavaScript and PHP for both client- and server-side programming in this course."
            additionalText="Stockholm University"
          />
        </div>

        <div className="flip-container">
          <div className="flip flip-vertical">
            <div className="front" style={{ backgroundColor: "#BC8F8F" }}>
              <h1 className="text-shadow">Programming in C#, III</h1>
            </div>
            <div className="back" style={{ backgroundColor: "#F5DEB3" }}>
              <h2>Programming in C#, III</h2>
              <p>This course is designed for advanced programmers looking to sharpen their skills and develop applications using the advanced features of the C# language and .NET technologies.</p>
              <span className="additional-text">Malmö university</span>
            </div>
          </div>
          <div className="flip flip-vertical">
            <div className="front" style={{ backgroundColor: "#D2B48C" }}>
              <h1 className="text-shadow">Computer Networks I</h1>
            </div>
            <div className="back" style={{ backgroundColor: "#BC8F8F" }}>
              <h2>Computer Networks I</h2>
              <p>This course provides a foundation in the theory and practice of configuring and securing computer networks, including instruction on creating basic network topologies.</p>
              <span className="additional-text">Mälardalen university</span>
            </div>
          </div>
          <div className="flip flip-vertical">
            <div className="front" style={{ backgroundColor: "#F5DEB3" }}>
              <h1 className="text-shadow">Game Development - 3D Modelling and Character Animation</h1>
            </div>
            <div className="back" style={{ backgroundColor: "#DEB887" }}>
              <h2>Game Development - 3D Modelling and Character Animation</h2>
              <p>A course provides a foundational understanding and hands-on experience in creating game graphics using 2D and 3D tools, including techniques for rigging and animating characters and their movements for digital games.</p>
              <span className="additional-text">Blekinge college</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenteredFlipCards;
