import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Education from './Components/Education';
import Carousel from './Components/Carousel';
import Skills from './Components/Skills';
import SocialIcons from './Components/SocialIcons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
      <About/>
      <Education/>
      <Carousel/>
      <Skills/>
      <SocialIcons/>
        <div className='wave'>
          
        </div>
      </main>
    </div>
  );
}

export default App;
