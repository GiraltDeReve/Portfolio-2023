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
          // pour chaque objet boucle avec map pour faire tableau et
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