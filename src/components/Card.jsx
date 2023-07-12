import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../assets/style/gallery.css";

function Card({ id, title, cover }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
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


