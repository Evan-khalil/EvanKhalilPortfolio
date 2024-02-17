// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Timeline from './Components/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Timeline/>
      </main>
    </div>
  );
}

export default App;
