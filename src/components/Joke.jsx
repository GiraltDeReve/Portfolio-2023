import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Joke = () => {

  const [joke, setJoke] = useState(null);
  // État pour stocker la blague
  const [showAnswer, setShowAnswer] = useState(false);
  // État pour afficher la réponse à la blague
  const [showModal, setShowModal] = useState(false);
  // État pour afficher ou masquer le modal de la blague

// récupérer une blague depuis l'API
  const fetchJoke = () => {
    fetch('https://backend-omega-seven.vercel.app/api/getjoke')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setJoke(data[0]); // Accéder à l'objet de blague dans le tableau
          setShowAnswer(false); // Réinitialiser l'affichage de la réponse
        }
      })
      .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération de la blague :', error);
      });
  };

  // Appeler fetchJoke une fois lorsque le composant est montré
  useEffect(() => {
    fetchJoke();
  }, []);

  // Afficher la réponse à la blague
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };
  // Masquer le modal de la blague
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Afficher le modal de la blague
  const handleOpenModal = () => {
    setShowModal(true);
  };


return (
  <>
<Button className="custom-button" onClick={handleOpenModal}>Une petite blague ?</Button>
<Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>Une petite blague pour la route ?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {joke && (
      <>
        <p>{joke.question}</p>
        {!showAnswer && (
          <button className='btn btn-outline-secondary d-inline-flex align-items-center' onClick={handleShowAnswer}>
            Afficher la réponse
          </button>
        )}
        {showAnswer && <p>{joke.punchline}</p>}
      </>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={fetchJoke}>Nouvelle blague</Button>
  </Modal.Footer>
</Modal>
</>
);
};


export default Joke;

