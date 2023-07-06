import React from 'react';
import technologiesData from '../data/technologies.json';
import psychologyData from '../data/psychologie.json';

function Techno() {
const technologies = technologiesData;
const psychology = psychologyData;

const techno = (item) => {
  return (
    <div className="col d-flex align-items-start border" width="50px">
      <img className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" src={item.logo} alt={item.title} />
      <div className="display-flex flex-column justify-content-center">
        <p className="fw-bold mb-0 fs-4 align-text-center text-white">{item.title}</p>
      </div>
  </div>
  );
};

  return (
      <div className="container px-4 py-5" id="icon-grid">
        <h3 className="fw-bold mb-0 fs-2 pb-2 border-bottom text-white" >Technologies et outils que j'utilise : </h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {technologies.map((technology) => (
            <div key={technology.id}>{techno(technology)}</div>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {psychology.map((psycho) => (
            <div  key={psycho.id}>{techno(psycho)}</div>
          ))}
        </div>
      </div>
    );
}

export default Techno;
