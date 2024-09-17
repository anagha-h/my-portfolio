import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteering from './components/Volunteering';
import './tailwind.css'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;