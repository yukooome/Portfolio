import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import des icônes pour les flèches
import './Home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const competencesContainerRef = useRef(null);

  // Fonction pour ouvrir et fermer la modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const competences = [
    'VSCode','HTML', 'CSS', 'JavaScript', 'React', 'WordPress','Node.js', 'MongoDB Compass','Bootstrap', 'Tailwind CSS', 'SASS/SCSS', 'Figma','Git','GitHub', 'Animate', 
    'Photoshop', 'Illustrator', 'Procreate', 'Dessin','Peinture', 'Teams', 'One Drive'
  ];

  // Fonction pour faire défiler vers la gauche
  const scrollLeft = () => {
    if (competencesContainerRef.current) {
      competencesContainerRef.current.scrollBy({
        left: -300, // Ajustez cette valeur pour définir la distance de défilement
        behavior: 'smooth',
      });
    }
  };

  // Fonction pour faire défiler vers la droite
  const scrollRight = () => {
    if (competencesContainerRef.current) {
      competencesContainerRef.current.scrollBy({
        left: 300, // Ajustez cette valeur pour définir la distance de défilement
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="home">
      <div className="all-accueil">

        <div className="all-accueil-un">
          <h1>Développeuse Front-End, Junior</h1>
          <img
            src="src/img/astro-mignon.png"
            alt="astro"
            className="profile-image"
          />
          <h2>Hello World, ici MAÏSSÂA.</h2>
          <p>Bienvenue dans ton voyage à travers mon univers créatif et technique, où le code rencontre l'art pour donner vie à des expériences uniques.</p>
          <button onClick={toggleModal} className="open-modal-btn">
            En savoir plus
          </button>
        </div>

        <div className="all-accueil-deux">
          <div className="all-accueil-deux-titre">
            <h1>Portfolio</h1>
          </div>

          <div className="all-accueil-deux-casedeux">
            <div className='reseaux'>
              <a href="https://www.linkedin.com/in/ma%C3%AFss%C3%A2a-elbhi-32706830b/" target="_blank" rel="noopener noreferrer" className="neon-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.figma.com/files/team/1382626070649423703/drafts?fuid=1382626065797452021" target="_blank" rel="noopener noreferrer" className="neon-icon">
                <FontAwesomeIcon icon={faFigma} />
              </a>
              <a href="https://github.com/yukooome" target="_blank" rel="noopener noreferrer" className="neon-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/yukooo_art/?next=%2Fton-profile%2F" target="_blank" rel="noopener noreferrer" className="neon-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Section des compétences avec défilement horizontal et flèches */}
          <div className="all-accueil-deux-caseun">
            <h1 className="competences-titre">Compétences :</h1>

            <div className="competences-wrapper">
              <button className="scroll-btn" onClick={scrollLeft}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <div className="competences-container" ref={competencesContainerRef}>
                {competences.map((skill, index) => (
                  <div key={index} className="competence-card">
                    {skill}
                  </div>
                ))}
              </div>

              <button className="scroll-btn" onClick={scrollRight}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={toggleModal}>
              &times;
            </span>
            <img src="src/img/astro-world.png" alt="" className='image-modal-home' />
            <p>
              Salut les artistes ! Je m'appelle Maïssâa, mais tu peux aussi me connaître sous le nom de Yukooo...
              {/* Le texte ici */}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
