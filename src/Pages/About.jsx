import React from 'react';
import Skills from '../components/Skills.jsx';
import Resume from '../components/Resume.jsx';
import Techno from '../components/Techno.jsx';
import '.././assets/style/resume.css'

function About() {
  return (
    <main className='sections'>
      <Skills />
      <Resume />
      <Techno />
    </main>
  );
}

export default About;
