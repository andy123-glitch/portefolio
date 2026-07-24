import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import Button from "../components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
// Bulles d'icônes tech flottantes autour de la photo
const floatingTechs = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", angle: 0 },
  { name: "Node", icon: "https://cdn.simpleicons.org/nodedotjs/339933", angle: 72 },
  { name: "TS", icon: "https://cdn.simpleicons.org/typescript/3178C6", angle: 144 },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", angle: 216 },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", angle: 288 },
];
export default function Hero() {
  return (
    <section className=" min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 pt-24 items-center" id="about">
      <div className="flex flex-col lg:gap-12 md:gap-8 gap-4 lg:order-1 order-2">
        <h1 className="font-bold lg:text-4xl text-2xl">
          Développeur Web <span className="text-primary">Fullstack</span>
        </h1>
        <p className="text-muted-foreground lg:text-base text-sm">
          Je conçois et développe des applications web modernes, performantes et scalables avec des technologies de pointe.
        </p>
        <div className="flex gap-4 ">
          <Button>
            <Download size={18} />
            Télécharger mon CV
          </Button>
          <Button variant="secondary">
            Voir mes projets <ArrowRight size={18} />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="icon" size="icon">
            <FaGithub />
          </Button>
          <Button variant="icon" size="icon">
            <FaLinkedin />
          </Button>
          <Button variant="icon" size="icon">
            <Mail />
          </Button>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex justify-center relative">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <div className=" w-full h-full rounded-full overflow-hidden border-4 border-primary/60 shadow-[0_0_40px_2px__rgba(0,200,255,0.4)]">
            <img src={hero} alt="Photo de profil" className="w-full h-full object-cover" />
          </div>

          {floatingTechs.map((tech, i) => {
            const radius = 160;
            const rad = (tech.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <motion.div
                key={tech.name}
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg"
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
                  ease: "easeInOut",
                }}>
                <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
