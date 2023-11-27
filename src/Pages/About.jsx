import React from 'react';
import Skills from '../components/Skills.jsx';
import Resume from '../components/Resume.jsx';
import Techno from '../components/Techno.jsx';

function About() {
  return (
    <main>
    <section className='sections'>
      <Skills />
      <Resume />
    </section>
    <Techno />
    </main>
  );
}

export default About;
