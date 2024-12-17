import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <p>Vous pouvez me joindre par email ou via mes réseaux sociaux :</p>
      <div className="contact-links">
        <p><a href="mailto:maissaa.elbhi@gmail.com">Email: maissaa.elbhi@gmail.com</a></p>
        <p><a href="https://www.linkedin.com/in/ma%C3%AFss%C3%A2a-elbhi-32706830b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://www.instagram.com/yukooo_art/?next=%2Fton-profile%2F" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </div>
      
      {/* Copyright */}
      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Maissaa ElBhi. Tous droits réservés.</p>
      </footer>
    </section>
  );
}

export default Contact;
