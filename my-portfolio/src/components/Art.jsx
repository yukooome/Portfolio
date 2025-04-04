import React from 'react';
import './Art.css';

function Art() {
  const artisticProjects = [
    { title: 'Guts', description: 'Tableau', link: './assets/img/gutscarre.jpg', size: '30x40cm' },
    { title: 'Hiei', description: 'Tableau', link: './assets/img/hiei.jpg', size: '50x40cm' },
    { title: 'Gon', description: 'Tableau', link: './assets/img/gon.jpeg', size: '50x40cm' },
    { title: 'Zaraki', description: 'Tableau', link: './assets/img/zarakicouleur.jpg', size: '50x40cm' },
    { title: 'Nicky Larson', description: 'Tableau', link: './assets/img/nicky.jpg', size: '50x40cm' },
    { title: 'Bakugo', description: 'Tableau', link: './assets/img/bakugo.jpg', size: '50x40cm' },
    { title: 'Trafalgar', description: 'Tableau', link: './assets/img/trafacouleur.jpg', size: '50x40cm' },
    { title: 'Doflamingo', description: 'Tableau', link: './assets/img/doficouleur.jpg', size: '50x40cm' },
    { title: 'Yusuke', description: 'Tableau', link: './assets/img/yuyucouleur.jpg', size: '50x40cm' },
    { title: 'Toji', description: 'Tableau', link: './assets/img/tojicouleur.jpg', size: '50x40cm' },
    { title: 'Deku', description: 'Tableau', link: './assets/img/dekunoirblanc.jpg', size: '50x40cm' },
    { title: 'Gohan', description: 'Tableau', link: './assets/img/gohancouleur.jpg', size: '50x40cm' },
    { title: 'Itachi', description: 'Tableau', link: './assets/img/itachi.jpg', size: '50x40cm' },
    { title: 'Broly', description: 'Tableau', link: './assets/img/broly.jpg', size: '50x40cm' },
    { title: 'Ace', description: 'Tableau', link: './assets/img/ace.jpg', size: '50x40cm' },
    { title: 'Kakashi', description: 'Tableau', link: './assets/img/kakashicouleur.jpg', size: '50x40cm' },
    { title: 'Luffy', description: 'Tableau', link: './assets/img/luffychap.jpg', size: '50x40cm' },
    { title: 'Goku', description: 'Tableau', link: './assets/img/gokucouleur.jpg', size: '50x40cm' },
  ];

  const renderOtherProjects = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="project-image-art">
        <img 
          src={project.link} 
          alt={project.title} 
          className="grid-image-art" 
        />
        <div className="project-info">
          <div>
            <h3>{project.title}</h3>
            <p>{project.size}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="projects-art" className="projects-art">
      <div className="projects-container-art">
        <h2>Projets Artistiques</h2>
        <p>Depuis mon enfance, le dessin a toujours été une passion, mais j'ai pris une pause pendant plusieurs années, sans réelle raison autre que le cours de la vie. J'ai renoué avec l'art pendant la période du Covid, en découvrant la peinture, qui est devenue un véritable moyen d'expression pour moi. Depuis, je me perfectionne chaque jour, en apprenant et en expérimentant de nouvelles techniques. L'art, en particulier l'univers du manga, reste pour moi une source constante de créativité et de plaisir.
    Voici quelques-unes de mes œuvres, vous pourrez en découvrir plus en cliquant sur le lien <a className='lien' href="https://www.instagram.com/yukooo_art/?next=%2Fton-profile%2F" target="_blank">Instagram</a>.
</p>

        <div className="projects-grid-art">
          {renderOtherProjects(artisticProjects)}
        </div>
      </div>
    </section>
  );
}

export default Art;
