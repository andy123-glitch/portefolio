import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './layouts/Header';
import Hero from './layouts/Hero';
import About from './layouts/About';
import Skills from './layouts/Skills';
import Experiences from './layouts/Experiences';
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <main className="mx-auto container px-5">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="grid grid-cols-1  md:grid-cols-[1fr_1fr]">
        <Experiences />
        <Contact />
      </div>
    </main>
    <Footer />
  </StrictMode>
);
