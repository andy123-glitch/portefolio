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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <main className="mx-auto max-w-7xl px-5">
      {' '}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-[2fr_1fr] lg:gap-10">
        <Experiences />
        <Contact />
      </div>
    </main>
  </StrictMode>
);
