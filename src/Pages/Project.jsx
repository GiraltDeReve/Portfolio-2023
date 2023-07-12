import React from 'react';
import { useParams} from "react-router-dom";
import projects from '../data/projects.json';
// import Contacts from '../components/Contacts.jsx';
import Github from '../components/Github.jsx';
import '../assets/style/project.css';


function Project() {
  
	const idProject = useParams('id').id;
  // extrait id hébergement depuis paramètres d'URL en utilisant le hook useParams
	const projectsDatas = projects.filter(data => data.id === idProject);
	// filtre les données de l'hébergement actuel en utilisant id hébergement extrait de l'URL
	// Attention = méthode filter() retourne un tableau avec un seul élément. Pour le récup, il faudra utiliser l'indice [0] même si 1 seul élément.
	
	return (
<main>
<section className='container'>
    <div className='main-container' key={projectsDatas[0].id}>
		<h2 className="title-container" >{projectsDatas[0].title}</h2>
        <div>
            <div className='second-container'>
                <h3 className='title'>Objectifs du projet</h3>
                <p className='description'>{projectsDatas[0].description}</p>
                {projectsDatas[0].problems && <p className='description'>{projectsDatas[0].problems}</p>}
              </div>
              <div className='second-container'>
                <Github key={projectsDatas[0].id} repo={projectsDatas[0].repo} />
                {projectsDatas[0].link && <a className='links' href={projectsDatas[0].link}>Voir la page du site</a>}
                {projectsDatas[0].github &&<a className='links' href={projectsDatas[0].github}>Voir le repository sur github</a>}
            </div>
            <div className='second-container'>
            <h3 className='title' >Technologies et langages utilisés</h3>
            <div className='technologies'>
              {projectsDatas[0].technologies.map((technology, index) => (
                <div className='technologie' key={index}>
                  <h4>{technology.titre}</h4>
                  <img src={technology.image} alt={technology.titre} />
                </div>
              ))}
            </div>
          </div>
        </div>		
    </div>	
    </section>	
    <section className='gallery-photo'>
      {projectsDatas[0].pictures.map((picture, index) => (
      <img key={index} src={picture} alt={projectsDatas[0].title} />
      ))}
    </section>	

</main>
	)
}

export default Project;
