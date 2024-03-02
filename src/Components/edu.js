// Edu.js
import React from 'react';
import styled from 'styled-components';
import './Edu.css'; 
const Title = styled.h1`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  text-align: center;
  color: white;
  padding-bottom: 5%;
  padding-top: 10%;
`;

const FlipCard = ({ frontColor, backTitle, backContent, additionalText }) => {
  return (
    <div className="flip">
      <div className="front" style={{ backgroundColor: frontColor }}>
        <h1 className="text-shadow">{backTitle}</h1>
      </div>
      <div className="back">
        <h2>{backTitle}</h2>
        <p>{backContent}</p>
        <span className="additional-text">{additionalText}</span> {/* Additional text */}
      </div>
    </div>
  );
};

const CenteredFlipCards = () => {
  return (
    <section id="education"> {/* Add section element */}
      <div className="center-container">
        <Title> Education </Title>
        <div className="flip-container">
          <FlipCard
            frontColor="#FFD700"
            backTitle="Bachelor's programme in Information Systems"
            backContent="Knowledge about people, organizations, and how to develop technology to support them alongside learning the basics of systems analysis and software development. The program offers courses in object-oriented analysis and design, agile methods, interaction design, database management, and programming in C# and Java."
            additionalText="Örebro University" 
          />
          <FlipCard
            frontColor="#87CEEB"
            backTitle="Programming for Internet"
            backContent="Gain expertise in using C# to program with supportive technologies, establish low-level connections to various servers, establish high-level connections to specialized servers like email, web, and database servers, and ensure security while communicating over the internet."
            additionalText="Stokholm University" 
          />
          <FlipCard
            frontColor="#FFA07A"
            backTitle="Web Development II"
            backContent="Learn to build sophisticated web-based systems using JavaScript and PHP for both client- and server-side programming in this course."
            additionalText="Stokholm University" 
          />
        </div>

        <div className="flip-container">
          <div className="flip flip-vertical">
            <div className="front" style={{ backgroundColor: "#20B2AA" }}>
              <h1 className="text-shadow">Programming in C#, III</h1>
            </div>
            <div className="back">
              <h2>Programming in C#, III</h2>
              <p>This course is designed for advanced programmers looking to sharpen their skills and develop applications using the advanced features of the C# language and .NET technologies.</p>
              <span className="additional-text">Malmö university</span>
            </div>
          </div>
          <div className="flip flip-vertical">
            <div className="front" style={{ backgroundColor: "#FF69B4" }}>
              <h1 className="text-shadow">Computer Networks I</h1>
            </div>
            <div className="back">
              <h2>Computer Networks I</h2>
              <p>This course provides a foundation in the theory and practice of configuring and securing computer networks, including instruction on creating basic network topologies.</p>
              <span className="additional-text">Mälardalen university</span>
            </div>
          </div>
          <div className="flip flip-vertical">
            <div className="front" style={{ backgroundColor: "#7B68EE" }}>
              <h1 className="text-shadow">Game Development - 3D Modelling and Character Animation</h1>
            </div>
            <div className="back">
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
