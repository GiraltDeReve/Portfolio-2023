import React from 'react';
import Intro from '../components/Intro';
import Joke from '../components/Joke.jsx';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <main>
      <Intro />
      <Gallery />
      <aside className='joke'><Joke /></aside>
    </main>
  );
}

export default Home;
