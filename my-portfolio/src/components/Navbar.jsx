import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#projects">Projets</a></li>
        <img src="src/assets/img/astro-site.png" alt="Logo" className="navbar-logo" />
        <li><a href="#projects-art">MonArt</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
