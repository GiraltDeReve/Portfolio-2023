import React from 'react';
import portrait from '../assets/images/portrait1.jpg';

const Intro = () => {

  return (
    <section className="introduction">
      <div className="contenu-introduction">
        <figure className="portrait">
          <img className="photo-portrait" src={portrait} alt="Portrait" />
        </figure>
        <div>
          <h2 className="title-introduction">
            Bonjour ! <i className="fa-solid fa-handshake-angle"></i>
          </h2>
          <p className="text-introduction">
            En <strong>reconversion professionnelle</strong> dans le
            développement web, je suis à la recherche d'une  
            <strong> alternance</strong> pour appliquer mes compétences et
            poursuivre mon apprentissage. Motivée, organisée et prête à relever
            de nouveaux défis, je serais ravie d'échanger sur vos projets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
