import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

// Réseaux sociaux réutilisables dans Navbar, Hero et Footer
export const socials = [
  {
    name: 'GitHub',
    attributs: {
      href: 'https://github.com/andy123-glitch',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    icon: FaGithub,
    ariaLabel: 'Voir mon profil Github',
  },
  {
    name: 'LinkedIn',
    attributs: {
      href: 'https://www.linkedin.com/in/andy-azerot-591743269/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    icon: FaLinkedinIn,
    ariaLabel: 'Voir mon profil Linkedin',
  },
  {
    name: 'Email',
    attributs: { href: 'mailto:andy.azerot@gmail.com' },
    ariaLabel: 'Pour me contacter par mail',
    icon: Mail,
  },
];
