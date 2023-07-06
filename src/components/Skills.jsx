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
    <aside id="container">
      <div id="container-onglets">
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
        <ul id="list-hard-skills">
          <div id="list1">
            <li className="li-principal">Bon niveau d'anglais</li>
            <li className="li-principal">HTML/CSS - JavaScript</li>
            <li className="li-principal">
              En cours d'aquisition :
              <ul>
                <li className="li-secondaire">Framework React</li>
                <li className="li-secondaire">Node.js et Express</li>
                <li className="li-secondaire">Base de données Mongo.DB</li>
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
          </div>
          <div id="list2">
            <li className="li-principal">
              Optimisation d'un site WEB et de son SEO :
              <ul>
                <li>Pratiques pour améliorer :</li>
                <ul>
                  <li className="li-secondaire">Performances d'un site</li>
                  <li className="li-secondaire">Référencement naturel</li>
                  <li className="li-secondaire">Accessibilité d'un site</li>
                </ul>
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
        <ul id="list-soft-skills">
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
