import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const location = useLocation();
  return (
    <header className="sticky-container">
      <section className="headerSite d-flex flex-wrap align-items-center sticky-top">
        <h1>Céline ROUAIRE</h1>
        <nav>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link px-2 text-white">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/About/' ? 'active' : ''}`}>
              <Link to="/About/" className="nav-link px-2 text-white">About</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/CV/' ? 'active' : ''}`}>
              <a href="https://giraltdereve.github.io/Portfolio-2023/CV2023Alternance(3).pdf" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;