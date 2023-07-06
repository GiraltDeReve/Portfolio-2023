import React, { useState } from 'react';
import '.././assets/style/resume.css';
import arrow from ".././assets/Arrow.png";

function Resume() {

  const [isOpen, setIsOpen] = useState(false);

  // const toggleCoursList = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <section id="formation">
        <section id="formation-OC" className="bloc">
          <h2>
            <i className="fa-solid fa-code"></i> FORMATION "DEVELOPPEUR WEB"
          </h2>
          <p className="lieu-date">
            OpenClassroom (Décembre 2023 – Juillet 2023)
          </p>

          <p className="description-formation-dev">
            Objectif de la formation : Transformer des maquettes graphiques en
            sites webs fonctionnels et ergonomiques via la réalisation de 7
            projet concrets basés sur des mises en situation professionnelles.
            <ul className="list-objectifs-formation">
              <li>
                Construire un site web responsive et dynamique s’adaptant à tout
                type d’écran grâce à l’intégration des éléments des maquettes
                graphiques (développement front-end avec HTML, CSS, JavaScript
                et React)
              </li>
              <li>
                Créer des API et des bases de données pour développer des sites
                complets et dynamiques et assurer le bon fonctionnement côté
                serveur (développement back-end avec NodeJS, Express et
                MongoDB).{' '}
              </li>
              <li>
                Optimiser les performances et réaliser la maintenance de sites
                web déjà existants pour permettre leur fonctionnement optimal et
                une bonne visibilité sur les moteurs de recherche (SEO).
              </li>
              <li>
                Gérer un projet web de A à Z : de la planification du projet à
                la présentation de la solution au client, en passant par la
                rédaction des spécifications techniques.
              </li>
            </ul>
          </p>
          <h3 onClick={() => setIsOpen(!isOpen)}>Cours suivi</h3>
          <img onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "arrow arrow-down" : "arrow arrow-up"}
          // condition : si isOpen is true, le style aarow down est appliqué sinon arrow up
          src={arrow}
          alt="Fléche pour déplier ou refermer contenu"
          />
          {isOpen && (
            <ul className="list-block">
          <li>Comprendre le Web et Découvrez les métiers de développeur</li>
          <li>Découvrez le fonctionnement des algorithmes</li>
          <li>Apprenez à utiliser la ligne de commande dans un terminal</li>
          <li>Gérez du code avec Git et GitHub</li>
          <li>Mettez en place votre environnement front-end</li>
          <li>Créez votre site web avec HTML5 et CSS3</li>
          <li>Créez une maquette web avec Figma</li>
          <li>Créez des sites web responsives avec Bootstrap 5</li>
          <li>Simplifiez-vous le CSS avec Sass</li>
          <li>
            Apprenez à programmer avec JavaScript et Créez des pages web
            dynamiques avec JavaScript
          </li>
          <li>Créez une application React complète</li>
          <li>Adoptez les API REST pour vos projets web</li>
          <li>Passez au Full Stack avec Node.js, Express et MongoDB</li>
          <li>Concevez un contenu web accessible</li>
          <li>Augmentez votre trafic grâce au référencement naturel (SEO)</li>
          <li>
            Optimisez le référencement de votre site (SEO) en améliorant ses
            performances techniques
          </li>
          <li>Augmentez votre trafic grâce au référencement naturel (SEO)</li>
          <li>..etc</li>
          </ul>
          )}
        </section>

        <section id="formation-initiale" className="bloc">
          <h2>
            <i className="fa-solid fa-graduation-cap"></i> MON PARCOURS
            UNIVERSITAIRE{' '}
          </h2>
          <h3>Université Clermont-Auvergne :</h3>
          <ul class="list-block" id="list-formation-initiale">
            <li>2014 - 2018 : Licence de Psychologie </li>
            <li>
              2018 - 2020 : Master mention Psychologie, Parcours "Psychologie,
              Ingénierie de la Formation, Orientation et Insertion"
            </li>
          </ul>
        </section>
      </section>
      <section id="experience-pro" className="bloc">
        <h2>
          <i className="fa-solid fa-user-tie"></i> MES EXPERIENCES
          PROFESSIONNELLES
        </h2>
        <h3>Accompagnatrice en Validation des Acquis de l’Expérience</h3>
        <p class="lieu-date">
          Université Clermont Auvergne (Octobre 2020 – Aout 2022)
        </p>
        <ul class="list-block" id="list-experience">
          <li>
            Accompagnement et suivi des candidats VAE dans le dispositif (à
            distance, en présence, individuel et collectif){' '}
          </li>
          <li>Ingénierie pédagogique et création d’outils numériques </li>
          <li>Animation d’activités pédagogiques et de formation </li>
        </ul>
      </section>
    </>         
  );
}

export default Resume;

