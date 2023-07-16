import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  // paramétre id, title et cover récupérés du composant gallery
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // on veut effet sombre quand souris entre dans l'espace "link"
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={`/project/${id}`}
      className="gallery-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // événements onMouseEnter et onMouseLeave attachés au link pour déclencher les fonctions de gestion des événements de souris déclarer avant
    >
      <img
        className={`gallery-item-image ${isHovered ? "hovered" : ""}`}
        src={cover}
        alt={title}
      />
      <h3 className={`gallery-item-title ${isHovered ? "show" : ""}`}>{title}</h3>
    </Link>
  );
}

export default Card;


