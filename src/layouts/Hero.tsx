import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';
import Button from '../components/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { socials } from '../datas/socialsData';
// Bulles d'icônes tech flottantes autour de la photo
const floatingTechs = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', angle: 0 },
  { name: 'Node', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', angle: 72 },
  { name: 'TS', icon: 'https://cdn.simpleicons.org/typescript/3178C6', angle: 144 },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', angle: 216 },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', angle: 288 },
];
export default function Hero() {
  return (
    <section
      className="grid min-h-screen grid-cols-1 items-center gap-12 pt-24 lg:grid-cols-2"
      id="hero"
    >
      <div className="order-2 flex flex-col gap-4 md:gap-8 lg:order-1 lg:gap-12">
        <h1 className="text-2xl font-bold lg:text-4xl">
          Développeur Web <span className="text-primary">Fullstack</span>
        </h1>
        <p className="text-sm text-muted-foreground lg:text-base">
          Je conçois et développe des applications web modernes, performantes et scalables avec des
          technologies de pointe.
        </p>
        <div className="flex gap-4">
          <Button href="/Andy_Azerot_CV.pdf" target="_blank">
            <Download size={18} />
            Voir le CV (PDF)
          </Button>
          <Button variant="secondary" href="#projects">
            Voir mes projets <ArrowRight size={18} />
          </Button>
        </div>
        <div className="flex gap-2">
          {socials.map((social, index) => (
            <Button
              key={index + 'Footer' + social.name}
              variant="icon"
              size="icon"
              {...social.attributs}
              aria-label={social.ariaLabel}
            >
              <social.icon />
            </Button>
          ))}
        </div>
      </div>
      <div className="relative order-1 flex justify-center lg:order-2">
        <div className="relative h-72 w-72 md:h-80 md:w-80">
          <div className="h-full w-full overflow-hidden rounded-full border-4 border-primary/60 shadow-[0_0_40px_2px__rgba(0,200,255,0.4)]">
            <img src={hero} alt="Photo de profil" className="h-full w-full object-cover" />
          </div>

          {floatingTechs.map((tech, i) => {
            const radius = 160;
            const rad = (tech.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <motion.div
                key={tech.name}
                className="absolute top-1/2 left-1/2 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card shadow-lg"
                style={{
                  x: x - 24,
                  y: y - 24,
                }}
                animate={{
                  y: [y - 24, y - 34, y - 24],
                }}
                transition={{
                  duration: 5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img src={tech.icon} alt={tech.name} className="h-7 w-7" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
