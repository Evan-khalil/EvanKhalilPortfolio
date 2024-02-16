// components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="course">
          <h3>Stockholm University</h3>
          <p>Development II: Learn to build sophisticated web-based systems using JavaScript and PHP for both client- and server-side programming in this course.</p>
          <p>Programming for Interne: Gain expertise in using C# to program with supportive technologies, establish low-level connections to various servers, establish high-level connections to specialized servers like email, web, and database servers, and ensure security while communicating over the internet.</p>
          <h3>Malmö University</h3>
          <p>Programming in C#, III: This course is designed for advanced programmers looking to sharpen their skills and develop applications using the advanced features of the C# language and .NET technologies.</p>
          <h3>Luleå University</h3>
          <p>Introduction to computer game creation: This course provides an overview of the professional roles, work processes, and production pipeline in the game industry. It covers basic scripting and vi</p>
          <p>Game Design: This course covers the fundamentals of creating engaging gameplay, including game history, game structure, and techniques in game design Course 1 at Blekinge College: Game Development - 3D Modelling and Character Animation,A course provides a foundational understanding and hands-on experience in creating game graphics using 2D and 3D tools, including techniques for rigging and animating characters and their movements for digital games.</p>
          <h3>Mälardalens University</h3>
          <p>Computer Networks I: This course provides a foundation in the theory and practice of configuring and securing computer networks, including instruction on creating basic network topologies.</p>
          <h3>Örebro University</h3>     
          <p>Programme at Örebro university: Bachelor's programme in Information Systems, Knowledge about people, organizations, and how to develop technology to support them alongside learning the basics of systems analysis and software development. The program offers courses in object-oriented analysis and design, agile methods, interaction design, database management, and programming in C# and Java.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
