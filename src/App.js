// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Education from './Components/Education';
import ProjectHighlights from './Components/ProjectHighlights';
import KeySkills from './Components/KeySkills';
import SoftwareKnowledge from './Components/SoftwareKnowledge';
import Contact from './Components/Contact';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
