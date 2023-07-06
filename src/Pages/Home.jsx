import React from 'react';
import About from '../components/About';
import Contacts from '../components/Contacts.jsx';
import Joke from '../components/Joke.jsx';

function Home() {
  return (
    <main>
      <About />
      <Contacts />
      <Joke />
    </main>
  );
}

export default Home;
