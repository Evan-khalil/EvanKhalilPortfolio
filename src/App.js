import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Skills from './Components/Skills';
import SocialIcons from './Components/SocialIcons';
import Edu from './Components/edu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
      <About/>
      <Edu/>
      <Skills/>
      <Carousel/>
      
      <SocialIcons/>
        <div className='wave'>
          
        </div>
      </main>
    </div>
  );
}

export default App;
