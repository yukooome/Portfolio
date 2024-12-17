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
    'Photoshop', 'Illustrator', 'Dessin','Peinture', 'Teams', 'One Drive'
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
            <img src="src/img/astro-world.png" alt="" className='image-modal-home' />
            <p>
            Salut les artistes ! Je m'appelle Maïssâa, mais tu peux aussi me connaître sous le nom de Yukooo. Je suis actuellement en formation en développement front-end, où j'apprends à maîtriser des langages comme JavaScript, React, HTML et CSS, tout en explorant des outils créatifs comme Illustrator, Animate et Photoshop.

J'ai découvert le front-end à un moment où je me sentais un peu perdue, sans savoir quelle direction prendre ni avoir trouvé quelque chose qui me passionnait vraiment. Quand je suis tombée sur ce domaine, j'ai ressenti un grand soulagement, comme si j'avais enfin trouvé ma voie. Le fait de pouvoir allier la technique à la créativité m'a permis de m'épanouir pleinement.

C'est un monde où il faut constamment se remettre en question et apprendre. Pour quelqu'un comme moi, qui n'aime pas se contenter de ce qui est acquis et qui adore découvrir de nouvelles choses, c'est une véritable source de motivation. L'idée de toujours pouvoir progresser et me perfectionner m'anime au quotidien.

Ce parcours me permet de combiner mes compétences techniques avec ma passion pour l'art, le dessin et la peinture, des domaines qui m'ont toujours profondément inspirée. Ma passion pour le manga et l'art se reflète dans chacun de mes projets. C'est d'ailleurs ce qui m'a naturellement orientée vers le front-end : créer des interfaces visuelles est un moyen parfait d'allier créativité et savoir-faire technique.

Que ce soit à travers mes dessins, mes peintures sur toile ou mes créations numériques, chaque projet est une occasion de partager mon amour pour l'art et d'innover. Je suis toujours en quête de nouveaux défis pour continuer à apprendre, que ce soit dans le développement web ou dans l'art numérique.

Si tu souhaites découvrir mes projets ou discuter d'une collaboration, n'hésite pas à me contacter !
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
