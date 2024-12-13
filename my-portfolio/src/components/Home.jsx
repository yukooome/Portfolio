import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFigma } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir et fermer la modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const competences = [
    'HTML', 'CSS', 'JavaScript', 'React','Node.js','Bootstrap', 'Tailwind CSS', 'SASS/SCSS', 'Figma','Git','GitHub', 'Animate', 
    'Photoshop', 'Illustrator', 'Teams', 'One Drive'
  ];

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
          <h2>Salut les artistes, moi c'est MAÏSSÂA</h2>
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

            <div className='autre'></div>
          </div>

          {/* Section des compétences avec défilement horizontal */}
          <div className="all-accueil-deux-caseun">
          <h1 className="competences-titre">Compétences :</h1>
            <div className="competences-container">
              {competences.map((skill, index) => (
                <div key={index} className="competence-card">
                  {skill}
                </div>
              ))}
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
            <p>
            Salut les artistes, je m'appelle Maïssâa, mais tu peux aussi me connaître sous le nom de Yukooo. Actuellement en formation en développement frontend, j'apprends à maîtriser différents langages comme JavaScript, React, HTML et CSS, tout en explorant des outils de création comme Illustrator, Animate et Photoshop. Ce parcours m'a permis de combiner mes compétences techniques avec ma passion pour l'art, le dessin et la peinture, des domaines qui m'ont toujours animée.

Ma passion pour le manga et l'art se reflète profondément dans mes projets. C'est d'ailleurs ce qui m'a poussée à me diriger vers le frontend : la possibilité de créer des interfaces visuelles est une manière pour moi d'allier ma créativité à mes compétences techniques. Que ce soit à travers mes dessins à la main, mes peintures sur toile ou mes créations numériques, chaque projet est une occasion de mettre en avant mon amour pour l'art et de développer des expériences uniques.

Je suis constamment en quête de nouveaux défis pour perfectionner mes compétences, que ce soit dans le domaine du développement web ou de l'art numérique. Si tu veux découvrir mes projets ou discuter d’une collaboration, n’hésite pas à me contacter !
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
