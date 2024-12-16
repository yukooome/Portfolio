import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const featuredProjects = [
    { title: 'Projet 1', description: 'Description du projet 1', link: '#' },
    { title: 'Projet 2', description: 'Description du projet 2', link: '#' },
    { title: 'Projet 3', description: 'Description du projet 3', link: '#' },
    { title: 'Projet 4', description: 'Description du projet 4', link: '#' },
    { title: 'Projet 5', description: 'Description du projet 5', link: '#' },
    { title: 'Projet 6', description: 'Description du projet 6', link: '#' },
  ];

  const digitalProjects = [
    { title: 'Pokémon', description: 'Carte postale Pokémon', link: './src/img/pokemon-card.png' },
    // { title: 'Projet Numérique 2', description: 'Description du projet numérique 2', link: '#' },
    // { title: 'Projet Numérique 3', description: 'Description du projet numérique 3', link: '#' },
  ];

  const artisticProjects = [
    { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: '#' },
    { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: '#' },
    { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: '#' },
    { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: '#' },
    { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: '#' },
    { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: '#' },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const renderDigitalProjects = (projects) => {
  return projects.map((project, index) => (
    <div key={index} className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button className="digital-project-btn" onClick={() => openModal(project.link)}>Voir plus</button>
    </div>
  ));
};


  const renderOtherProjects = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Voir plus</a>
      </div>
    ));
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Mes Projets vedettes</h2>
        <div className="projects-grid">
          {renderOtherProjects(featuredProjects)}
        </div>

        <h2>Projet Numérique</h2>
        <div className="projects-carousel">
          {renderDigitalProjects(digitalProjects)}
        </div>

        <h2>Projet Artistique</h2>
        <div className="projects-carousel">
          {renderOtherProjects(artisticProjects)}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Project" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
