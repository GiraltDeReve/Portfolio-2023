import React from 'react';
import technologiesData from '../data/projects.json';
import psychologyData from '../data/psychologie.json';


function Techno() {
  const psychology = psychologyData;

  // Extraction des titres uniques des technologies à partir des données des projets
const allTechnologiesTitle = new Set();
  technologiesData.forEach((item) => {
    item.technologies.forEach((technology) => {
      allTechnologiesTitle.add(technology.titre);
    });
  });
  const TechnologiesTitle = Array.from(allTechnologiesTitle);

  // Extraction des images uniques des technologies à partir des données des projets
const allTechnologiesImage = new Set();
  technologiesData.forEach((item) => {
    item.technologies.forEach((technology) => {
      allTechnologiesImage.add(technology.image);
    });
  });
  const TechnologiesImage = Array.from(allTechnologiesImage);

 // Fonction pour afficher une technologie
const techno = (titre, image) => {
  return (
    <div className="col d-flex align-items-start border" style={{ width: "270px", height: "80px", padding: "20px" }}>
      <div className="d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
        <img className="bi text-body-secondary flex-shrink-0 me-3 " src={image} alt={titre} />
      </div>
      <div className="display-flex flex-column justify-content-center">
        <p className="fw-bold mb-0 fs-4 align-text-center text-white">{titre}</p>
      </div>
    </div>
  );
};

 // Fonction pour afficher un outil psycho
const outils = (item) => {
  return (
    <div className="col d-flex align-items-start border" style={{ width: "270px", height: "auto", padding: "20px" }}>
      <div className="d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
        <img className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" src={item.logo} alt={item.title} />
      </div>
      <div className="display-flex flex-column justify-content-center">
        <p className="fw-bold mb-0 fs-4 align-text-center text-white">{item.title}</p>
      </div>
    </div>
  );
};

  return (
      <section className="icon-grid">
        <h3 className="fw-bold mb-0 fs-2 pb-2 border-bottom text-white" >Technologies et outils que j'utilise : </h3>
        <div id='technos' className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {TechnologiesTitle.map((titre, index) => (
          <div id='techno' key={index}>{techno(titre, TechnologiesImage[index])}</div>
        ))}
        </div>
        <div id='technos' className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {psychology.map((psycho) => (
            <div id='psycho' key={psycho.id}>{outils(psycho)}</div>
          ))}
        </div>
      </section>
    );
}

export default Techno;
