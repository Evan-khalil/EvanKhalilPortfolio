// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Education from './Components/Education';
import './App.css';
import './index.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Education />
        
      </main>
    </div>
  );
}

export default App;
