// Projets - données pour la section Projects
import { type Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Site de suive de fiche',
    description: 'A changer',
    technologies: ['React', 'SASS', 'MySQL', 'PHP', 'Symphony', 'Docker'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://exemple.com/',
    image: 'https://placehold.co/600x400/0e2628/00c8ff?text=E-commerce',
  },
  {
    id: 2,
    title: 'Projets OpenClassRooms',
    description: 'A changer',
    technologies: ['React', 'JS', 'HTML', 'CSS', 'Express', 'MongoDB', 'SEO', 'SASS'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://exemple.com/',
    image: 'https://placehold.co/600x400/0e2628/00c8ff?text=Task+App',
  },
  {
    id: 3,
    title: 'PorteFolio',
    description: 'A changer',
    technologies: ['React', 'Tailwind', 'Typescript'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://exemple.com/',
    image: 'https://placehold.co/600x400/0e1628/00c8ff?text=Restaurant',
  },
];
