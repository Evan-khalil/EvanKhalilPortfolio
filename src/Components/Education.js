import React from 'react';
import './Education.css'; // Assuming you have a CSS file named Education.css for styling

function Education() {
  return (
    <section id="Education">
      <div className="bg-gradient_solid">
        <div className="container-fluid">
          <div className="section-header">
            <h2 className="SectionHeaders" id="eduHead">A brief overview of my education</h2>
          </div>
          <div className="steps">
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Web Development II</h2>
                <p>Learn to build sophisticated web-based systems using JavaScript and PHP for both client- and server-side programming in this course.</p>
              </div>
              <i className="step-line"></i>
            </div>
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Programming for Internet</h2>
                <p>Gain expertise in using C# to program with supportive technologies, establish low-level connections to various servers, establish high-level connections to specialized servers like email, web, and database servers, and ensure security while communicating over the internet.</p>
              </div>
              <i className="step-line"></i>
            </div>
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Programming in C#, III</h2>
                <p>This course is designed for advanced programmers looking to sharpen their skills and develop applications using the advanced features of the C# language and .NET technologies.</p>
              </div>
              <i className="step-line"></i>
            </div>
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Introduction to computer game creation</h2>
                <p>This course provides an overview of the professional roles, work processes, and production pipeline in the game industry. It covers basic scripting and visual scripting, as well as game and level design, and content creation for games.</p>
                <h2 className="contentHead">Game Design</h2>
                <p>This course covers the fundamentals of creating engaging gameplay, including game history, game structure, and techniques in game design.</p>
              </div>
              <i className="step-line"></i>
            </div>
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Game Development - 3D Modelling and Character Animation</h2>
                <p>A course provides a foundational understanding and hands-on experience in creating game graphics using 2D and 3D tools, including techniques for rigging and animating characters and their movements for digital games.</p>
              </div>
              <i className="step-line"></i>
            </div>
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Computer Networks I</h2>
                <p>This course provides a foundation in the theory and practice of configuring and securing computer networks, including instruction on creating basic network topologies.</p>
              </div>
              <i className="step-line"></i>
            </div>
            <div className="steps-container">
              <div className="content">
                <h2 className="contentHead">Bachelor's programme in Information Systems</h2>
                <p>Knowledge about people, organizations, and how to develop technology to support them alongside learning the basics of systems analysis and software development.</p>
                <p>The program offers courses in object-oriented analysis and design, agile methods, interaction design, database management, and programming in C# and Java.</p>
              </div>
              <i className="step-line"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
