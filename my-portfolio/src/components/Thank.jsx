import React from 'react';
import './Thank.css';

function Thank() {
  return (
    <section id="about" className="about-section">
      <h2>Remerciements</h2>
      <div className="about-content">
        <p>
          Je souhaite exprimer toute ma gratitude à l'équipe de <strong>Interface3</strong> et à tous les formateurs qui m'ont accompagnée tout au long de cette incroyable aventure. Grâce à eux, j'ai pu découvrir le monde du développement web et apprendre à maîtriser des outils et des technologies qui m'étaient totalement inconnus au départ.
        </p>
        <p>
          Leur passion et leur pédagogie ont joué un rôle fondamental dans mon évolution. Ils ont su partager avec moi non seulement leurs connaissances, mais aussi leur enthousiasme pour ce domaine, ce qui m'a aidée à trouver ma propre voie et à m'épanouir dans cette discipline.
        </p>
        <p>
          Je tiens à remercier particulièrement chacun d'entre eux pour leur patience, leur écoute et leur soutien constant. Grâce à eux, je me sens aujourd'hui prête à relever de nouveaux défis avec confiance et détermination.
        </p>
        <p>
          Un immense merci à <strong>Interface3</strong> pour m'avoir permis de grandir, d'apprendre et de me sentir à ma place dans ce monde en constante évolution.
        </p>
        <img src="src/img/interface3logo.png" alt="LogoInterface" />
      </div>
    </section>
  );
}

export default Thank;
