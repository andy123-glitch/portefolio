import { type Experience } from '../types/index';
// Expériences professionnelles - données pour la section Experience
export const experiences: Experience[] = [
  {
    id: 1,
    period: '2025 - 2026',
    city: 'Limoges, France',
    role: 'Titre professionnel DWWM',
    company: 'GRETA du Limousin',
    technologies: ['React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    id: 2,
    period: '2022 - 2023',
    city: 'Belfort, France',
    role: 'Licence Professionnelle TEPROW',
    company: 'IUT de Belfort',
    technologies: ['SwiftUI', 'Laravel', 'Ionic', 'Vue'],
  },
  {
    id: 3,
    period: '2020 - 2022',
    city: 'Limoges, France',
    role: 'BTS Systèmes numériques',
    company: 'Lycée Turgot',
    technologies: ['C++', 'Réseau', 'IoT', 'Sigfox'],
  },
];
