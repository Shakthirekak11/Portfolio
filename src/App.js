import React from 'react';
import './App.css';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Education from './education';
import Certifications from './certifications';
import Projects from './projects';
import Skills from './skills';

function App() {
    return (
        <div className="App">
            <Header />
            <WorkExperience />
            <Education />
            <Certifications />
            <Projects />
            <Skills />
        </div>
        
    );
}

export default App;
