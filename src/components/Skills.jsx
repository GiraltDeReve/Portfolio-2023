import React, { useState } from 'react';
import '.././assets/style/skills.css';

function Aside() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    if (activeTab === index) {
      return;
    }
    setActiveTab(index);
  };

  return (
    <aside className="container-skills">
      <div className="container-onglets">
        <h2
          className={`onglets ${activeTab === 1 ? 'active' : ''}`}
          data-anim="1"
          onClick={() => handleTabClick(1)}
        >
          Compétences/
          <br />
          connaissances
        </h2>
        <h2
          className={`onglets ${activeTab === 2 ? 'active' : ''}`}
          data-anim="2"
          onClick={() => handleTabClick(2)}
        >
          Soft skills
        </h2>
      </div>
      <div
        className={`contenu ${activeTab === 1 ? 'activeContenu' : ''}`}
        data-anim="1"
      >
        <h4>Aquis et en cours d'aquisition :</h4>
        <ul className="list-hard-skills">
          <div className="list1">
            <li className="li-principal">Bon niveau d'anglais</li>
            <li className="li-principal">
              Langages acquis :
              <ul>
                <li className="li-secondaire">HTML/CSS</li>
                <li className="li-secondaire">JavaScript et Framework React</li>
                <li className="li-secondaire">Node.js et Express</li>
                <li className="li-secondaire">API Rest et base de données Mongo.DB</li>
              </ul>
            </li>
            <li className="li-principal">
              Gestion de projet et méthodes agiles :
              <ul>
                <li className="li-secondaire">Veille informationnellee</li>
                <li className="li-secondaire">
                  Gestion de projet avec Tableau KANBAN
                </li>
                <li className="li-secondaire">
                  Découpage de projet et utilisation d'users stories
                </li>
                <li className="li-secondaire">Méthode Scrum</li>
              </ul>
            </li>
            <li className="li-principal"> Optimisation d'un site WEB et de son SEO</li>
            <li className="li-principal">
              En cours d'aquisition :
              <ul>
                <li className="li-secondaire">PHP</li>
                <li className="li-secondaire">Animations CSS</li>
              </ul>
            </li>
            </div>
        </ul>
      </div>
      <div
        className={`contenu ${activeTab === 2 ? 'activeContenu' : ''}`}
        data-anim="2"
      >
        <h4>Mais aussi...</h4>
        <ul className="list-soft-skills">
          <li>Organisation</li>
          <li>Rigueur</li>
          <li>Autonomie</li>
          <li>Sérieux</li>
          <li>Gestion du stress</li>
          <li>Persévérance</li>
          <li>Orientée résolution de problémes</li>
          <li>Curiosité</li>
          <li>Plaisir d’apprendre</li>
          <li>Esprit d'équipe</li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
