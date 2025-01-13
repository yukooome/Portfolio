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


          <div className="cv">
            <a href="/path/to/your/image.jpg" target="_blank" rel="noopener noreferrer">
              <button className="cv-btn">Voir le CV</button>
            </a>
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
            Salut les artistes ! Je m'appelle Maïssâa, mais tu peux aussi me connaître sous le nom de Yukooo. Actuellement en formation en développement front-end, chez interfaces 3 à Bruxelles, j'apprends à maîtriser des langages comme JavaScript, React, HTML et CSS, tout en explorant des outils créatifs tels qu'Illustrator, Animate et Photoshop.

J'ai découvert le front-end à un moment où je me sentais un peu perdue, sans savoir quelle direction prendre. Quand je suis tombée sur ce domaine, j'ai ressenti un immense soulagement, comme si j'avais enfin trouvé ma voie. L'idée de pouvoir allier technique et créativité m'a vraiment permis de m'épanouir.

Dans ce domaine, il faut constamment se remettre en question et apprendre. Pour moi, qui adore découvrir de nouvelles choses et ne jamais me contenter de l'acquis, c'est une source de motivation constante. L'envie de progresser et de me perfectionner m'anime chaque jour.

Ce parcours me permet de combiner mes compétences techniques avec ma passion pour l'art, le dessin et la peinture, des domaines qui m'inspirent profondément. Ma passion pour le manga et l'art se reflète d'ailleurs dans tous mes projets. C'est ce qui m'a naturellement orientée vers le front-end, où je peux créer des interfaces visuelles et allier créativité et savoir-faire technique. Cette double compétence me permet de proposer des projets uniques et immersifs.

Toujours en quête de nouveaux défis et d'opportunités pour évoluer, j'aime collaborer sur des projets créatifs. Je vous invite à découvrir mon univers en pleine expansion. Amusez-vous bien !

Que ce soit à travers mes dessins, mes peintures sur toile ou mes créations numériques, chaque projet est une occasion de partager ma passion pour l'art et d'innover. Je continue d'apprendre, que ce soit dans le développement web ou l'art numérique.

Si vous souhaitez découvrir mes projets ou discuter d'une collaboration, n'hésitez pas à me contacter !
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
