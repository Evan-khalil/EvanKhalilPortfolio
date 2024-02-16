// components/SoftwareKnowledge.js
import React from 'react';
import './SoftwareKnowledge.css';

const SoftwareKnowledge = () => {
  return (
    <section id="software" className="software-section">
      <div className="container">
        <h2>Software Knowledge</h2>
        <div className="grid">
          <div className="item">
            <i className="fab fa-windows"></i>
            <p>Visual Studio</p>
            <div className="progress" style={{ width: '100%' }}></div>
          </div>
          <div className="item">
            <i className="fab fa-windows"></i>
            <p>Visual Studio Code</p>
            <div className="progress" style={{ width: '100%' }}></div>
          </div>
          <div className="item">
            <i className="fab fa-windows"></i>
            <p>Unreal Engine</p>
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <div className="item">
            <i className="fab fa-windows"></i>
            <p>Gimp</p>
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoftwareKnowledge;
