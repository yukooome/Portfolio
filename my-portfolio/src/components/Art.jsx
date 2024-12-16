import React from 'react';
import './Art.css';

function Art() {
  const artisticProjects = [

    { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: './src/img/gutscarre.jpg' },
    { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: './src/img/hiei.jpg' },
    { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: './src/img/gon.jpeg' },
    { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: './src/img/zarakicouleur.jpg' },
    { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: './src/img/nicky.jpg' },
    { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: './src/img/bakugo.jpg' },

    { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: './src/img/trafacouleur.jpg' },
    { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: './src/img/doficouleur.jpg' },
    { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: './src/img/yuyucouleur.jpg' },
    { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: './src/img/tojicouleur.jpg' },
    { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: './src/img/dekunoirblanc.jpg' },
    { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: './src/img/gohancouleur.jpg' },

    { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: './src/img/gokucouleur.jpg' },
    { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: './src/img/gokunoirblanc.jpg' },
    { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: './src/img/gutsnoirblanc.jpg' },
    { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: './src/img/kakashicouleur.jpg' },
    { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: './src/img/luffycouleur.jpg' },
    { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: './src/img/luffynoirblanc.jpg' },

    { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: './src/img/meruemnoirblanc.jpg' },
    { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: './src/img/musashinoirblanc.jpg' },
    { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: './src/img/nezukocouleur.jpg' },
    { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: './src/img/ken.jpg' },
    { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: './src/img/zarakinoirblanc.jpg' },
    { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: './src/img/zorocouleur.jpg' },

    { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: './src/img/itachi.jpg' },
    { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: './src/img/broly.jpg' },
    { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: './src/img/berserkcolo.jpg' },
    { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: './src/img/ken.jpg' },
    { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: './src/img/luffychap.jpg' },
    { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: './src/img/asta.jpg' },

    // { title: 'Projet Artistique 1', description: 'Description du projet artistique 1', link: './src/img/ace.jpg' },
    // { title: 'Projet Artistique 2', description: 'Description du projet artistique 2', link: './src/img/allmight.jpg' },
    // { title: 'Projet Artistique 4', description: 'Description du projet artistique 4', link: './src/img/luffyfive.jpg' },
    // { title: 'Projet Artistique 5', description: 'Description du projet artistique 5', link: './src/img/saitama.jpg' },
    // { title: 'Projet Artistique 3', description: 'Description du projet artistique 3', link: './src/img/zoronoir.jpg' },
    // { title: 'Projet Artistique 6', description: 'Description du projet artistique 6', link: './src/img/bakunoir.jpg' },


  ];

  const renderOtherProjects = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="project-image-art">
        <img 
          src={project.link} 
          alt={project.title} 
          className="grid-image-art" 
        />
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
