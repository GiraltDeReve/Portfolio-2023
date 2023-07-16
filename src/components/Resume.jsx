import React, { useState } from 'react';
import arrow from ".././assets/images/Arrow.png";

function Resume() {

  const [isFormationOpen, setIsFormationOpen] = useState(false);
  // pour afficher contenu collapse formation
  const [isCoursOpen, setIsCoursOpen] = useState(false);
// pour afficher contenu collapse cours

  const toggleFormation = () => {
    setIsFormationOpen(!isFormationOpen);
    // pour inverser(toggle) valeur de isFormationOpen (cache ou montre contenu collapse)
  };

  const toggleCours = () => {
    setIsCoursOpen(!isCoursOpen);
    // idem
  };

  return (
    <>
      <section className="formation">
        <section className="bloc">
          <h2>
            <i className="fa-solid fa-code"></i> FORMATION "DEVELOPPEUR WEB"
          </h2>
          <p className="lieu-date">
            OpenClassroom (Décembre 2023 – Juillet 2023)
          </p>

          <div className="description-formation-dev">
            <p><strong>Objectif de la formation : Transformer des maquettes graphiques en
            sites webs fonctionnels et ergonomiques </strong></p>
            <p><i className="fa-solid fa-arrow-right"></i>  Via la réalisation de 7
            projets concrets basés sur des mises en situation professionnelles.</p>
            <div className='objectifs'>
            <h3 onClick={toggleFormation}> Objectifs de la formation </h3>
            <img
              className={`arrow ${isFormationOpen ? 'arrow-down' : 'arrow-up'}`}
              src={arrow}
              alt="Fléche pour déplier ou refermer contenu"
              onClick={toggleFormation}
              />
            </div>
          {isFormationOpen && (
            <ul className="list-objectifs-formation">
              <li>
                <strong>Construire un site web responsive et dynamique</strong> grâce à l’intégration des éléments des maquettes
                graphiques <em>(développement front-end avec HTML, CSS, JavaScript
                et React)</em> <br /><br />
              </li>
              <li>
              <strong>Créer des API et des bases de données</strong> pour développer des sites
                complets et dynamiques et assurer le bon fonctionnement côté
                serveur <em>(développement back-end avec NodeJS, Express et
                MongoDB)</em> <br /><br />
              </li>
              <li>
              <strong>Optimiser les performances et réaliser la maintenance</strong> de sites
                web déjà existants pour permettre leur fonctionnement optimal et
                une bonne visibilité sur les moteurs de recherche (SEO).<br /><br />
              </li>
              <li>
              <strong> Gérer un projet web de A à Z :</strong>  de la planification du projet à
                la présentation de la solution au client, en passant par la
                rédaction des spécifications techniques.
              </li>
            </ul>
            )}
          </div>
          <div className='cours'>
          <h3 onClick={toggleCours}>Cours suivis</h3>
            <img
              className={`arrow ${isCoursOpen ? 'arrow-down' : 'arrow-up'}`}
              src={arrow}
              alt="Fléche pour déplier ou refermer contenu"
              onClick={toggleCours}
            />
          </div>
          {isCoursOpen && (
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

        <section className="bloc">
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
      <section className="bloc experience-pro">
        <h2>
          <i className="fa-solid fa-user-tie"></i> MES EXPERIENCES
          PROFESSIONNELLES
        </h2>
        <h3>Accompagnatrice en Validation des Acquis de l’Expérience</h3>
        <p className="lieu-date">
          Université Clermont Auvergne (Octobre 2020 – Aout 2022)
        </p>
        <ul className="list-block" id="list-experience">
          <li>
            Accompagnement et suivi des candidats VAE dans le dispositif (à
            distance, en présence, individuel et collectif){' '}
          </li>
          <li>Ingénierie pédagogique et création d’outils numériques </li>
          <li>Animation d’activités pédagogiques et de formation </li>
        </ul>
      </section>
      </section>
    </>         
  );
}

export default Resume;

