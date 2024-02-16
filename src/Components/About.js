// components/About.js
import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const aboutText = `Welcome to my portfolio website! My name is Evan Khalil and I am a recent graduate of the Information Systems program at Örebro University. <br/> I am excited to embark on my career as a system developer and am eager to take my first step in the field. <br/> I am a highly motivated individual who is driven by a desire to continuously develop my skills. I believe that by streamlining and systemizing work processes, we can achieve a better quality of life. My experience in the field of information systems has taught me the importance of attention to detail, critical thinking, and problem-solving skills. I am confident that I can apply these skills to any project and help make it a success. <br/> As you explore my website, you will find examples of my past work and accomplishments. I am proud of what I have learned so far and am excited for the future. <br/> If you have any questions or would like to discuss any potential opportunities, please don't hesitate to reach out to me. Thank you for visiting my website.`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= aboutText.length) {
        setText(aboutText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
      <h2 id="about-title">About Me</h2>
        <p dangerouslySetInnerHTML={{__html: text}} id='about-text'></p>
      </div>
    </section>
  );
}

export default About;
