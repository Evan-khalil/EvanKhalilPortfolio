// components/KeySkills.js
import React from 'react';
import './KeySkills.css';

const KeySkills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Key Skills</h2>
        <div className="skill">
          <p>Html</p>
          <div className="bar">
            <div className="progress" style={{ width: '88%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p>PHP</p>
          <div className="bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p>JavaScript</p>
          <div className="bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p>C#</p>
          <div className="bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p>Sql</p>
          <div className="bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p>css</p>
          <div className="bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeySkills;
