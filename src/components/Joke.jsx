import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../assets/style/joke.css"

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const fetchJoke = () => {
    fetch('https://backend-omega-seven.vercel.app/api/getjoke')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setJoke(data[0]); // Accéder à l'objet de blague dans le tableau
          setShowAnswer(false);
        }
      })
      .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération de la blague :', error);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };


return (
  <>
<Button className="custom-button" onClick={handleOpenModal}>Une petite blague pour la route ?</Button>
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

