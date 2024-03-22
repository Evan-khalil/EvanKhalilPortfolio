import React from 'react';
import './App.css';
import MenySection from './Components/MenySection';
import AboutSection from './Components/AboutSection';
import EducationSection from './Components/EducationSection';
import SkillSection from './Components/SkillSection';
import ProjectSection from './Components/ProjectSection';
import LanguageSwitcher from './Components/LanguageSwitcher'; 

function App() {
  return (
    <div className="App">
      <div className="top-right">
        <LanguageSwitcher /> 
      </div>
      <div class="center">

      </div>
      <MenySection />
      <main>
        <AboutSection />
        <EducationSection />
        <SkillSection />
        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
