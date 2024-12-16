import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null); // Stocke tout le projet sélectionné

  const featuredProjects = [
    { title: 'Projet 1', description: 'Description du projet 1', link: '#' },
    { title: 'Projet 2', description: 'Description du projet 2', link: '#' },
    { title: 'Projet 3', description: 'Description du projet 3', link: '#' },
    { title: 'Projet 4', description: 'Description du projet 4', link: '#' },
    { title: 'Projet 5', description: 'Description du projet 5', link: '#' },
    { title: 'Projet 6', description: 'Description du projet 6', link: '#' },
  ];

  const digitalProjects = [
    {
      title : "Illustrator",
      description : "Carte postale Pokémon",
      link : "./src/img/pokemon-card.png",
      titre : "Carte postale Pokémon",
      text : "J'ai réalisé cette carte postale dans le cadre de ma formation pour souhaiter de bonnes vacances à mes camarades. J'ai choisi l'univers de Pokémon car il représente l'une de mes passions, à la fois pour le manga et l'animation. Ce projet, entièrement dessiné par moi-même sur Illustrator, m'a permis de combiner créativité et technique. Chaque élément visuel a été conçu et illustré à la main, en mettant en avant des inspirations issues de cet univers que j'affectionne particulièrement."
    },
    
    { title: 'Projet Numérique 2', description: 'Description du projet numérique 2', link: '#' },
    { title: 'Projet Numérique 3', description: 'Description du projet numérique 3', link: '#' },
  ];

  const openModal = (project) => {
    setModalProject(project); // Met à jour tout le projet sélectionné dans l'état
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

  const renderDigitalProjects = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button className="digital-project-btn" onClick={() => openModal(project)}>Voir plus</button>
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
      </div>

      {isModalOpen && modalProject && ( // Vérifiez que modalProject existe avant de l'afficher
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalProject.link} alt={modalProject.titre} className="modal-image" />
            <h3>{modalProject.titre}</h3>
            <p>{modalProject.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
