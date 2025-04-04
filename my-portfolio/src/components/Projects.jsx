
import React, { useState, useRef } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'; // Icône pour l'œil
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Icône pour GitHub
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Flèches pour le défilement


function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null); // Stocke tout le projet sélectionné
  const competencesContainerRef = useRef(null); // Référence au conteneur des projets web
  const digitalProjectsContainerRef = useRef(null); // Référence au conteneur des projets numériques

  const [filter, setFilter] = useState('All'); // 'All' par défaut
  const [filterDigital, setFilterDigital] = useState('All'); // 'All' par défaut pour les projets numériques



  const featuredProjects = [
    { title: 'Artify', description: 'React - en cours', link: 'https://arrtify.vercel.app', gitLink : 'https://github.com/yukooome/React/tree/main/artify'},
    { title: 'Artcadabra', description: 'React - en cours', link: 'https://artcadabra.vercel.app/', gitLink : 'https://github.com/yukooome/React/tree/main/artcadabra' },
    { title: 'MangaKo', description: 'React - en cours', link: 'https://projet-react-eosin.vercel.app/', gitLink : 'https://github.com/yukooome/Projet-React' },
    { title: 'Pokedex', description: 'React', link: 'https://pokemons-pearl-ten.vercel.app', gitLink : 'https://github.com/yukooome/React/tree/main/Pokemons' },
    { title: 'Todolist', description: 'React', link: 'https://todoliste.vercel.app', gitLink : 'https://github.com/yukooome/React/tree/main/todolist' },
    { title: 'Prix-produit', description: 'React', link: 'https://prix-produit.vercel.app', gitLink : 'https://github.com/yukooome/React/tree/main/Prix-produit' },

    { title: 'Dr.Stone', description: 'JS - en cours', link: 'https://drstoone.vercel.app/', gitLink : 'https://github.com/yukooome/Projet-JS' },
    { title: 'Distributeur', description: 'JS - pas responsive', link: 'https://javascript-rho-cyan.vercel.app', gitLink : 'https://github.com/yukooome/Javascript/tree/main/distributeur%20manga' },
    { title: 'Flexbox', description: 'JS', link: 'https://flexbox-fawn-nu.vercel.app', gitLink : 'https://github.com/yukooome/Javascript/tree/main/exo_flexbox' },
    { title: 'Ville', description: 'JS', link: 'https://ville-steel.vercel.app', gitLink : 'https://github.com/yukooome/Javascript/tree/main/exoville' },
    { title: 'Ordre', description: 'JS', link: 'https://ordre.vercel.app', gitLink : 'https://github.com/yukooome/Javascript/tree/main/tableau-ordre' },


    { title: 'Formulaire', description: 'Html-CSS-JS', link: 'https://html-css-three-lyart.vercel.app', gitLink : 'https://github.com/yukooome/HTML_CSS/tree/main/Formulaire.exo' },
    { title: 'Tableau', description: 'Html-CSS', link: 'https://html-css-omega-khaki.vercel.app', gitLink : 'https://github.com/yukooome/HTML_CSS/tree/main/tableaux' },
    { title: 'Tailwind', description: 'Html-CSS - pas responsive', link: 'https://tailwind-mu-two.vercel.app', gitLink : 'https://github.com/yukooome/HTML_CSS/tree/main/tailwind' },
    { title: 'Animation', description: 'Html-CSS - pas responsive', link: 'https://animation-lac-iota.vercel.app', gitLink : 'https://github.com/yukooome/HTML_CSS/tree/main/animations' },
    { title: 'Responsive', description: 'Html-CSS', link: 'https://onizuka-flax.vercel.app', gitLink : 'https://github.com/yukooome/HTML_CSS/tree/main/exo-responsive' },
  ];

  const digitalProjects = [
    {
      title: "Illustrator",
      description: "Carte postale Pokémon",
      link: "./assets/img/pokemon-card.png",
      titre: "Carte postale Pokémon",
      text: "J'ai réalisé cette carte postale dans le cadre de ma formation pour souhaiter de bonnes vacances à mes camarades. J'ai choisi l'univers de Pokémon car il représente l'une de mes passions, à la fois pour le manga et l'animation. Ce projet, entièrement dessiné par moi-même sur Illustrator, m'a permis de combiner créativité et technique. Chaque élément visuel a été conçu et illustré à la main, en mettant en avant des inspirations issues de cet univers que j'affectionne particulièrement."
    },
    {
      title: "Illustrator",
      description: "Logo Yukooo_art",
      link: "./assets/img/logoYK.jpg",
      titre: "Logo Yukooo_art",
      text: "Dans le cadre d'un exercice sur Illustrator, j'ai conçu un logo pour mon nom d'artiste, Yukoo Art, en m'inspirant de l'esthétique kanji pour refléter mon univers. Ce design, inspiré de l'écriture japonaise traditionnelle, se distingue par des lignes simples et élégantes qui évoquent cette culture visuelle. J'ai cherché à y intégrer une touche d'authenticité et de profondeur, tout en gardant une approche épurée et moderne, en harmonie avec mon identité artistique."
    },
    {
      title: 'Procreate', description: 'Croquis de Hiei', link: './assets/img/procreatehiei.jpg',
      titre: "Croquis de Hiei",
      text: "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Hiei, un personnage culte du manga Yu Yu Hakusho. Il a servi de base pour la création d'un tableau qui est déjà achevé sur toile."
    },
    { title: 'Procreate', description: 'Croquis de Meruem', link: './assets/img/meruem.jpg',
      titre: "Croquis de Meruem",
      text: "Ce croquis a été réalisé avec l'application Procreate sur une tablette Apple. Il représente Meruem, un personnage emblématique du manga HxH, et a été conçu dans le but de réaliser un tableau. Cet exercice m'a permis de perfectionner mes techniques de dessin tout en capturant l'essence de ce personnage iconique, sur base d'une scène Manga."
    },

    { title: 'Procreate', description: 'Croquis de Madara', link: './assets/img/madaraPro.jpg',
      titre: "Croquis de Madara",
      text: "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Madara, un personnage culte du manga Naruto."
    },

    { title: 'Procreate', description: 'Croquis de Guts', link: './assets/img/ProGuts.jpg',
      titre: "Croquis de Guts",
      text: "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Guts, un personnage culte du manga Berserk. Il a servi de base pour la création d'un tableau qui est déjà achevé sur bois."
    },
    { title: 'Procreate', description: 'Croquis de Toji', link: './assets/img/proToji.jpg',
      titre: "Croquis de Toji",
      text: "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Toji, un personnage culte du manga Jijutsu Kaisen. Cet exercice m'a permis de m'entraîner et d'affiner la réalisation de ce personnage."
    },
    { title: 'Procreate', description: 'Croquis de Gon', link: './assets/img/Progon.jpg',
      titre: "Croquis de Gon",
      text: "Ce croquis a été réalisé à l'aide de l'outil Procreate sur tablette Apple. Il représente Gon, un personnage culte du manga HunterX Hunter. Il a servi de base pour la création d'un tableau qui est déjà achevé sur toile."
    },
    { title: 'Procreate', description: 'Croquis de Zaraki', link: './assets/img/proZaraki.jpg',
      titre: "Croquis de Zaraki",
      text: "Ce croquis a été réalisé avec l'application Procreate sur une tablette Apple. Il représente Zaraki, un personnage emblématique du manga Bleach, et a été conçu dans le but de réaliser un tableau. Cet exercice m'a permis de perfectionner mes techniques de dessin tout en capturant l'essence de ce personnage iconique."
    },
  ];


  // Filtrer les projets selon le filtre sélectionné
    const filteredProjects = featuredProjects.filter((project) => {
      if (filter === 'All') return true;
      return project.description.includes(filter);
    });

    const filteredDigitalProjects = digitalProjects.filter((project) => {
      if (filterDigital === 'All') return true;
      return project.title.includes(filterDigital);
    });
    


    const openModal = (project) => {
    setModalProject(project); // Met à jour tout le projet sélectionné dans l'état
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
    };

  // Fonction pour rendre les projets web avec défilement
  const renderOtherProjects = (projects) => {
    return (
      <div className="projects-carousel-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div ref={competencesContainerRef} className="projects-carousel">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* <a href={project.link} className="digital-project-btn" target="_blank" rel="noopener noreferrer">Voir plus</a>

              <a href={project.link} className="digital-project-btn" target="_blank" rel="noopener noreferrer">Voir plus</a> */}
              
              
              <div className="btn-container">
              {/* Bouton vers le projet avec l'icône œil */}
              <a
                href={project.link}
                className="btn-projet-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEye} className="icon" /> {/* Icône d'œil */}
              </a>

              {/* Bouton vers GitHub avec l'icône GitHub */}
              <a
                href={project.gitLink}
                className="btn-projet-web-git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="icon" /> {/* Icône GitHub */}
              </a>
            </div>

            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  };

  // Fonction pour rendre les projets numériques avec défilement horizontal
  const renderDigitalProjects = (projects) => {
    return (
      <div className="projects-carousel-container">
        <button className="scroll-btn left" onClick={scrollDigitalLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div ref={digitalProjectsContainerRef} className="projects-carousel">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="digital-project-btn" onClick={() => openModal(project)}>Voir plus</button>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollDigitalRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  };

  // Fonction pour faire défiler vers la gauche pour les projets web
  const scrollLeft = () => {
    if (competencesContainerRef.current) {
      competencesContainerRef.current.scrollBy({
        left: -300, 
        behavior: 'smooth',
      });
    }
  };

  // Fonction pour faire défiler vers la droite pour les projets web
  const scrollRight = () => {
    if (competencesContainerRef.current) {
      competencesContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  // Fonction pour faire défiler vers la gauche pour les projets numériques
  const scrollDigitalLeft = () => {
    if (digitalProjectsContainerRef.current) {
      digitalProjectsContainerRef.current.scrollBy({
        left: -300, // distance de défilement
        behavior: 'smooth',
      });
    }
  };

  // Fonction pour faire défiler vers la droite pour les projets numériques
  const scrollDigitalRight = () => {
    if (digitalProjectsContainerRef.current) {
      digitalProjectsContainerRef.current.scrollBy({
        left: 300, // distance de défilement
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projets web</h2>
        <p>Depuis avril, j'ai commencé à travailler sur plusieurs projets/exercices en utilisant différents langages comme JavaScript et React, ainsi que Node.js pour le backend. Pour le design, j'ai exploré le CSS, SCSS, et Tailwind, ce qui m'a permis de m'exercer tout en m'amusant. J'ai également eu l'occasion de partager mes passions, notamment celle pour le manga, avec les autres. Ce que j'ai particulièrement apprécié dans ce parcours, c'est que le développement laisse libre cours à la créativité: le seul frein, c'est nous-mêmes. Chaque projet est un moyen de repousser ses propres limites.</p>

        {/* Filtre pour les projets web */}
        <div className="filter-container">
          <button onClick={() => setFilter('All')} className="filter-btn">Tous</button>
          <button onClick={() => setFilter('React')} className="filter-btn">React</button>
          <button onClick={() => setFilter('JS')} className="filter-btn">JavaScript</button>
          <button onClick={() => setFilter('Html-CSS')} className="filter-btn">HTML-CSS</button>
        </div>




        {/* {renderOtherProjects(featuredProjects)} */}
        {renderOtherProjects(filteredProjects)} 


        <h2>Projets Numériques</h2>
        <p>En découvrant l'art numérique à travers des outils comme Illustrator, Photoshop et Animate, j'ai ouvert la porte à une toute nouvelle façon de créer et de partager ma passion. Ce fut une expérience incroyablement enrichissante, me permettant de repousser les limites de ma créativité. L'art numérique offre des possibilités infinies, et je suis enthousiaste à l'idée de continuer à explorer et à me perfectionner dans ces techniques. Chaque jour, j'apprends de nouvelles façons d'exprimer mon imagination dans cet univers riche et sans frontières.

Pour suivre mon évolution créative et mon apprentissage en dessin numérique, je vous invite à explorer mon univers artistique à travers un site que j'ai moi-même conçu en React. Vous y trouverez quelques-unes de mes œuvres digitales, et pour en découvrir davantage, cliquez sur le lien <a className='lien' href="https://artify-art-sigma.vercel.app/" target="_blank">Artify</a>.
        </p>

        <div className="filter-container">
          <button onClick={() => setFilterDigital('All')} className="filter-btn">Tous</button>
          <button onClick={() => setFilterDigital('Illustrator')} className="filter-btn">Illustrator</button>
          <button onClick={() => setFilterDigital('Procreate')} className="filter-btn">Procreate</button>
        </div>

        {/* {renderDigitalProjects(digitalProjects)} */}
        {renderDigitalProjects(filteredDigitalProjects)}

      </div>

      {isModalOpen && modalProject && ( // Vérifie que modalProject existe avant de l'afficher
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

