import React from 'react';
import { useEffect, useState } from 'react';
import projects from '../data/projects.json';
import Slideshow from '../components/Slideshow.jsx';
import Contacts from '../components/Contacts.jsx';
import Github from '../components/Github.jsx';

function Projects() {
  const [imageSlideshow, setImageSlideshow] = useState([]);
  // State = état local appelé imageSlideshow avec fonction useState qui définir valeur initiale à 0 (tableau vide)
  // setImageSlideshow = fonction qui permet de mettre à jour l'état
  useEffect(() => {
    if (projects.length !== 0) {
      // on vérifie que le tableau n'est pas vide parce que l'id n'existerai pas
      setImageSlideshow(projects[0].pictures);
      // effet qui se déclenche au changement de l'id de l'hébergement : mises à jour des données de l'hébergement actuel + tableau slideshow
    }
  }, [projects]);

  return (
    <main>
      {projects.map((project) => (
        <div key={project.id}>
          <h3 className="fw-bold mb-0 fs-4 align-text-center text-white">{project.title}</h3>
          <div className="project">
            <Slideshow imageSlideshow={project.pictures} />
            <div className='description-project'>
              <p>{project.description}</p>
              <Github key={project.id} repo={project.repo} />
              <a href={project.link}>Voir plus</a>
            </div>
          </div>
        </div>
      ))}
      <Contacts />
    </main>
  );
}

export default Projects;
