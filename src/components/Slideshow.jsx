import React, { useState } from 'react';
import ArrowRight from '../assets/Arrow-right.png';
import ArrowLeft from '../assets/Arrow-left.png';
import '../assets/style/slideshow.css';

function Slideshow({ imageSlideshow }) {
  const [actuelIndex, setActuelIndex] = useState(0);
 
  const nextSlide = () => {
    setActuelIndex(actuelIndex + 1);
    if (actuelIndex === imageSlideshow.length - 1) setActuelIndex(0);
  };

  const prevSlide = () => {
    setActuelIndex(actuelIndex - 1);
    if (actuelIndex === 0) setActuelIndex(imageSlideshow.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlideshow[actuelIndex]})` }}
      className="carousel"
    >
      {imageSlideshow.length > 1 && (
        <div>
          <img
            className="slide-arrow arrow-right"
            src={ArrowRight}
            alt="Aller à l'image suivante"
            onClick={nextSlide}
          />
          <img
            className="slide-arrow arrow-left"
            src={ArrowLeft}
            alt="Aller à l'image précédente"
            onClick={prevSlide}
          />
          <p className="slideCounter">
            {actuelIndex + 1} / {imageSlideshow.length}
          </p>
          
        </div>
      )}
    </section>
  );
}

export default Slideshow;