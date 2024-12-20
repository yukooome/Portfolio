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
    {
      title : "Illustrator",
      description : "Logo Yukooo_art",
      link : "./src/img/logoYK.jpg",
      titre : "Logo Yukooo_art",
      text : "Dans le cadre d'un exercice sur Illustrator, j'ai conçu un logo pour mon nom d'artiste, Yukoo Art, en m'inspirant de l'esthétique kanji pour refléter mon univers. Ce design, inspiré de l'écriture japonaise traditionnelle, se distingue par des lignes simples et élégantes qui évoquent cette culture visuelle. J'ai cherché à y intégrer une touche d'authenticité et de profondeur, tout en gardant une approche épurée et moderne, en harmonie avec mon identité artistique."
    },
    
    { title: 'Procreate', description: 'Croquis de Hiei', link: './src/img/procreatehiei.jpg',
      titre : "Croquis de Hiei",
      text : "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Hiei, un personnage culte du manga Yu Yu Hakusho. Il a servi de base pour la création d'un tableau qui est déjà achevé sur toile."
     },
     { title: 'Procreate', description: 'Croquis de Guts', link: './src/img/proGuts.jpg',
      titre : "Croquis de Guts",
      text : "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Guts, un personnage culte du manga Berserk. Il a servi de base pour la création d'un tableau qui est déjà achevé sur bois."
     },
    { title: 'Procreate', description: 'Croquis de Toji', link: './src/img/proToji.jpg',
      titre : "Croquis de Toji",
      text : "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Toji, un personnage culte du manga Jijutsu Kaisen. Cet exercice m'a permis de m'entraîner et d'affiner la réalisation de ce personnage.'", },

      { title: 'Procreate', description: 'Croquis de Zaraki', link: './src/img/proZaraki.jpg',
        titre : "Croquis de Zaraki",
        text : "Ce croquis a été réalisé avec l'application Procreate sur une tablette Apple. Il représente Zaraki, un personnage emblématique du manga Bleach, et a été conçu dans le but de réaliser un tableau. Cet exercice m'a permis de perfectionner mes techniques de dessin tout en capturant l'essence de ce personnage iconique.", },

      { title: 'Photoshop', description: 'description', link: '',
        text : "", },
      { title: 'Animate', description: 'description', link: '',
        text : "", },
  ];

  const openModal = (project) => {
    setModalProject(project); // Met à jour tout le projet sélectionné dans l'état
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

    // Projets Web
    const renderOtherProjects = (projects) => {
      return projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Voir plus</a>
        </div>
      ));
    };

  // Projet Numérique
  const renderDigitalProjects = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button className="digital-project-btn" onClick={() => openModal(project)}>Voir plus</button>
      </div>
    ));
  };



  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projets web</h2>
        <p>Depuis avril, j'ai commencé à travailler sur plusieurs projets en utilisant différents langages comme JavaScript et React, ainsi que Node.js pour le backend. Pour le design, j'ai exploré le CSS, SCSS, et Tailwind, ce qui m'a permis de m'exercer tout en m'amusant. J'ai également eu l'occasion de partager mes passions, notamment celle pour le manga, avec les autres. Ce que j'ai particulièrement apprécié dans ce parcours, c'est que le développement laisse libre cours à la créativité: le seul frein, c'est nous-mêmes. Chaque projet est un moyen de repousser ses propres limites.
        </p>
        <div className="projects-grid">
          {renderOtherProjects(featuredProjects)}
        </div>

        <h2>Projet Numérique</h2>
        <p>En découvrant l'art numérique à travers des outils comme Illustrator, Photoshop et Animate, j'ai ouvert la porte à une toute nouvelle façon de créer et de partager ma passion. Ce fut une expérience incroyablement enrichissante, me permettant de repousser les limites de ma créativité. L'art numérique offre des possibilités infinies, et je suis enthousiaste à l'idée de continuer à explorer et à me perfectionner dans ces techniques. Chaque jour, j'apprends de nouvelles façons d'exprimer mon imagination dans cet univers riche et sans frontières.</p>
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
