// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Header from './components/Header.jsx';
// import Home from './Pages/Home.jsx';
// // import Projects from './Pages/Projects.jsx';
// import Project from './Pages/Project.jsx';
// import About from './Pages/About.jsx';
// import Contacts from './components/Contacts.jsx';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* premier argument de la fonction */}
//     <Router>
//       <Header />
//       <Routes>
//         {/* routes remplace switch dans la nouvelle version de recat router */}
//         <Route exact="true" path="/Portfolio-2023/" element={<Home />} />
//         <Route path="/Project/:id/" element={<Project />} />
//         <Route path="/About/" element={<About />} />
//         {/* <Route path="*" element={<Error />} /> */}
//       </Routes>
//       <Contacts />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
//   // deuxiéme argument de la fonction : l'élément DOM cible
// );

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
// import Projects from './Pages/Projects.jsx';
import Project from './Pages/Project.jsx';
import About from './Pages/About.jsx';
import Contacts from './components/Contacts.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Portfolio-2023/" element={<Home />} />
        <Route path="/Project/:id/" element={<Project />} />
        <Route path="/About/" element={<About />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Contacts />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
