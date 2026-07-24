// Projets - données pour la section Projects
import { type Project } from "../types/index";

export const projects: Project[] = [
  {
    id: 1,
    title: "Plateforme E-commerce",
    description: "Une boutique en ligne complète avec gestion de produits, panier et paiement sécurisé.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/",
    liveUrl: "https://exemple.com/",
    image: "https://placehold.co/600x400/0e2628/00c8ff?text=E-commerce",
  },
  {
    id: 2,
    title: "Application de Gestion de Tâches",
    description: "Une app web de productivité avec drag & drop, collaboration temps réel et statistiques.",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/",
    liveUrl: "https://exemple.com/",
    image: "https://placehold.co/600x400/0e2628/00c8ff?text=Task+App",
  },
  {
    id: 3,
    title: "Site Vitrine Restaurant",
    description: "Un site responsive avec menu interactif, réservation en ligne et galerie photos.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/",
    liveUrl: "https://exemple.com/",
    image: "https://placehold.co/600x400/0e1628/00c8ff?text=Restaurant",
  },
];
