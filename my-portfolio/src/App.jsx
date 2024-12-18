import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Art from './components/Art';
import Thank from './components/Thank';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Art />
      <Thank />
      <Contact />
    </div>
  );
}

export default App;
