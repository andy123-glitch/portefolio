import About from '../layouts/About';
import Contact from '../layouts/Contact';
import Experiences from '../layouts/Experiences';
import Hero from '../layouts/Hero';
import Projects from '../layouts/Projects';
import Skills from '../layouts/Skills';

export default function HomePage() {
  return (
    <main className="mx-auto container px-6">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        <Experiences />
        <Contact />
      </div>
    </main>
  );
}
