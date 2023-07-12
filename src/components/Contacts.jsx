import React from 'react';
// import '.././assets/style/contacts.css';

const Contacts = () => {
  return (
    <footer className="contacts">
      <h2> Où me trouver et où me contacter :</h2>

      <div className="link-contact">
        <i className="fa-solid fa-square-envelope fa-xl"></i>
        <a href="mailto:celine.rouaire@gmail.com">
          Mon adresse mail : celine.rouaire@gmail.com
        </a>
      </div>

      <div className="link-contact">
        <i className="fa-brands fa-linkedin fa-xl"></i>
        <a
          href="https://www.linkedin.com/in/c%C3%A9line-rouaire-b91408165/"
          title="Mon profil Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          Mon profil Linkedin
        </a>
      </div>

      <div className="link-contact">
        <i className="fa-brands fa-square-github fa-xl"></i>
        <a
          href="https://github.com/GiraltDeReve"
          title="Mon profil Github"
          target="_blank"
          rel="noreferrer"
        >
          Mon profil Github
        </a>
      </div>
    </footer>
  );
};

export default Contacts;
