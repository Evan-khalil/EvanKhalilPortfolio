// components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <div className="grid">
          <div className="item">
            <a href="https://se.linkedin.com/in/evan-khalil-0a6013164" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/Evan-khalil" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
