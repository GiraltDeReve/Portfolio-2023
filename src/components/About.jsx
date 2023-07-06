import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait1.jpg';
import '.././assets/style/about.css';

const About = () => {
  const [repoCount, setRepoCount] = useState(0);
  useEffect(() => {
    fetch('https://api.github.com/users/GiraltDeReve')
      .then(response => response.json())
      .then(data => {
        const numberOfRepos = data.public_repos;
        setRepoCount(numberOfRepos);
      })
      .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération des données :', error);
      });
  }, []);

  return (
    <section id="introduction">
      <div id="contenu-introduction">
        <figure id="portrait">
          <img id="photo-portrait" src={portrait} alt="Portrait photo de CV" />
        </figure>
        <div>
          <h2 id="title-introduction">
            Bonjour ! <i className="fa-solid fa-handshake-angle"></i>
          </h2>
          <p id="text-introduction">
            En <strong>reconversion professionnelle</strong> dans le
            développement web, je suis à la recherche d'une{' '}
            <strong>alternance</strong> pour appliquer mes compétences et
            poursuivre mon apprentissage. Motivée, organisée et prête à relever
            de nouveaux défis, je serais ravie d'échanger sur vos projets.
          </p>
        </div>
        <div>
          <h2 id="title-introduction" >Nombre de repository sur compte GitHub</h2>
          <p id="text-introduction">{repoCount}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
