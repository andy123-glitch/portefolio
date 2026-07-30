// Projets - données pour la section Projects
import { type Project } from '../types/index';
import grimoire from '../assets/prev_grimoire.jpeg'
import kasa from '../assets/prev_kasa.jpeg'
import suivi from '../assets/prev_suiv_de_fiche.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Site de suive de fiche',
    description:
      'Cette application permet de suivre et gérer les fiches de stage des alternants, incluant les tâches, commentaires, formations, etc.',
    technologies: ['MySQL', 'PHP', 'Symphony', 'Docker'],
    liveUrl: 'https://alternant.greta-digital.fr/',
    image: suivi,
  },
  {
    id: 2,
    title: 'Kasa',
    description:
      "Une application web de location de logements entre particuliers. Ce projet a été réalisé dans le cadre de la formation Intégrateur Web (OpenClassrooms). L'objectif de ce projet est de créer une Single Page Application (SPA) moderne et réactive avec React et React Router.",
    technologies: ['React', 'SCSS', 'React Router'],
    githubUrl: 'https://github.com/andy123-glitch/Kasa-React',
    liveUrl: 'https://kasa.andy-azerot.fr/',
    image: kasa,
  },
  {
    id: 3,
    title: 'Grimoire',
    description:
      "Il s'agit de l'API backend pour le projet OCR Livre. Développée avec Node.js et Express, cette API permet de gérer des utilisateurs (authentification) et des livres, avec un traitement d'images",
    technologies: ['Express', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com/andy123-glitch/backend-ocr-livre',
    image: grimoire,
  },
];
