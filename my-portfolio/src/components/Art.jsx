import React from 'react';
import './Art.css';

function Art() {
  const artisticProjects = [
    { title: 'Guts', description: 'Tableau', link: './src/img/gutscarre.jpg', size: '30x40cm' },
    { title: 'Hiei', description: 'Tableau', link: './src/img/hiei.jpg', size: '50x40cm' },
    { title: 'Gon', description: 'Tableau', link: './src/img/gon.jpeg', size: '50x40cm' },
    { title: 'Zaraki', description: 'Tableau', link: './src/img/zarakicouleur.jpg', size: '50x40cm' },
    { title: 'Nicky Larson', description: 'Tableau', link: './src/img/nicky.jpg', size: '50x40cm' },
    { title: 'Bakugo', description: 'Tableau', link: './src/img/bakugo.jpg', size: '50x40cm' },
    { title: 'Trafalgar', description: 'Tableau', link: './src/img/trafacouleur.jpg', size: '50x40cm' },
    { title: 'Doflamingo', description: 'Tableau', link: './src/img/doficouleur.jpg', size: '50x40cm' },
    { title: 'Yusuke', description: 'Tableau', link: './src/img/yuyucouleur.jpg', size: '50x40cm' },
    { title: 'Toji', description: 'Tableau', link: './src/img/tojicouleur.jpg', size: '50x40cm' },
    { title: 'Deku', description: 'Tableau', link: './src/img/dekunoirblanc.jpg', size: '50x40cm' },
    { title: 'Gohan', description: 'Tableau', link: './src/img/gohancouleur.jpg', size: '50x40cm' },
    { title: 'Itachi', description: 'Tableau', link: './src/img/itachi.jpg', size: '50x40cm' },
    { title: 'Broly', description: 'Tableau', link: './src/img/broly.jpg', size: '50x40cm' },
    { title: 'Guts', description: 'Tableau', link: './src/img/berserkcolo.jpg', size: '50x40cm' },
    { title: 'Kaneki Ken', description: 'Tableau', link: './src/img/ken.jpg', size: '50x40cm' },
    { title: 'Luffy', description: 'Tableau', link: './src/img/luffychap.jpg', size: '50x40cm' },
    { title: 'Asta', description: 'Tableau', link: './src/img/asta.jpg', size: '50x40cm' },
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
        <h2>Projet Artistique</h2>
        <div className="projects-grid-art">
          {renderOtherProjects(artisticProjects)}
        </div>
      </div>
    </section>
  );
}

export default Art;
