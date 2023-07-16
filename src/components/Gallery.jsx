import projects from '../data/projects.json';
import Card from "./Card.jsx";


function Gallery() {
  return (
    <section className="gallery-section">
      <div className='gallery-title'>
        <h2 className='fw-bold mb-0 fs-1 align-text-center text-white border-bottom'>Portfolio</h2>
      </div>
      <div className="gallery-items">
        {projects.map((data) => {
          // boucle avec map qui itère sur chaque élément du tableau projects. 
          // data représente chaque élément du tableau à chaque itération de la boucle.
          // composant Card créé à chaque itération avec données de data (propriété id, title et cover passées au composat card) 
          return (
            <Card
              key={data.id}
              id={data.id}
              // pour définir path
              title={data.title}
              cover={data.cover}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;