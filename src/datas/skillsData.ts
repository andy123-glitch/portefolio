// Compétences / technologies
import { type Skill } from '../types/index';
import {
  FileCode, // HTML
  Palette, // CSS
  Code2, // JavaScript
  FileJson, // TypeScript
  Atom, // React
  Server, // Node.js
  Cpu, // Express
  Wind, // Tailwind CSS
  Database, // MongoDB
  GitBranch, // Git
  Container, // Docker
} from 'lucide-react';

export const skills: Skill[] = [
  {
    name: 'HTML',
    color: '#E34F26',
    icon: FileCode,
    category: 'frontend',
    description:
      'Le HTML est la base de toute interface web. Il structure le contenu avec des éléments sémantiques qui rendent une page accessible, lisible et compréhensible par les navigateurs et les outils d’assistance.',
    usage:
      'Je l’utilise pour organiser les contenus d’une page, hiérarchiser les informations et créer des interfaces solides sans dépendre du rendu JavaScript.',
  },
  {
    name: 'CSS',
    color: '#1572B6',
    icon: Palette,
    category: 'frontend',
    description:
      'Le CSS donne le style, la mise en page et l’identité visuelle d’un projet. Il permet de transformer une structure brute en interface moderne, claire et agréable à utiliser.',
    usage:
      'J’utilise le CSS pour gérer les espaces, les couleurs, les animations et la responsive design afin que chaque écran reste fonctionnel et visuellement cohérent.',
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: Code2,
    category: 'frontend',
    description:
      'JavaScript permet d’ajouter de l’interactivité à une interface. Il rend les pages dynamiques, réactives et capables de répondre aux actions de l’utilisateur en temps réel.',
    usage:
      'Je m’en sers pour manipuler le DOM, gérer les états simples et créer les interactions qui rendent une application plus fluide et intuitive.',
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: FileJson,
    category: 'frontend',
    description:
      'TypeScript apporte une couche de sécurité supplémentaire à JavaScript en imposant des types explicites. Cela réduit les erreurs, améliore la lisibilité et facilite la maintenance d’un codebase.',
    usage:
      'Je l’utilise pour construire des projets plus robustes, surtout quand la logique grossit, afin d’éviter les régressions et d’accélérer le développement.',
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: Atom,
    category: 'frontend',
    description:
      'React permet de décomposer une interface en composants réutilisables. Cette approche rend le développement plus structuré, plus maintenable et plus efficace sur des projets complexes.',
    usage:
      'Je l’utilise pour concevoir des interfaces modulaires, gérer l’état des composants et proposer des expériences plus fluides sur les projets web.',
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: Server,
    category: 'backend',
    description:
      'Node.js permet d’exécuter du JavaScript côté serveur. Il est particulièrement adapté aux API, aux services web et aux applications qui demandent de la vitesse et de l’évolutivité.',
    usage:
      'Je l’utilise pour créer des API, gérer les requêtes et faire communiquer le front-end avec des services backend de manière fiable.',
  },
  {
    name: 'Express',
    color: '#E2E8F0',
    icon: Cpu,
    category: 'backend',
    description:
      'Express est un framework léger pour Node.js. Il simplifie la création de routes, la gestion des middlewares et la conception d’API REST efficaces.',
    usage:
      'Je l’utilise pour structurer rapidement des services backend, sécuriser les endpoints et organiser le flux de données de mes applications.',
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    icon: Wind,
    category: 'frontend',
    description:
      'Tailwind CSS accélère le développement UI en proposant une approche utilitaire et très expressive. Il permet de prototyper rapidement sans sacrifier la cohérence visuelle.',
    usage:
      'Je l’utilise pour construire des interfaces rapides, lisibles et modulaires, tout en gardant une qualité visuelle homogène sur l’ensemble du site.',
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: Database,
    category: 'backend',
    description:
      'MongoDB est une base de données NoSQL flexible et adaptée aux applications qui évoluent rapidement. Elle stocke des données JSON et s’intègre bien à des architectures orientées API.',
    usage:
      'Je l’utilise quand j’ai besoin d’un stockage rapide et évolutif pour des projets backend ou des applications avec des structures de données dynamiques.',
  },
  {
    name: 'Git',
    color: '#F05032',
    icon: GitBranch,
    category: 'outil',
    description:
      'Git est un système de gestion de versions essentiel pour travailler en équipe et garder un historique propre d’un projet. Il permet de tracer chaque évolution et de sécuriser le code.',
    usage:
      'Je l’utilise pour organiser le développement, conserver des versions stables et collaborer efficacement sur des projets avec plusieurs étapes.',
  },
  {
    name: 'Docker',
    color: '#2496ED',
    icon: Container,
    category: 'outil',
    description:
      'Docker permet de packager une application avec ses dépendances dans un environnement reproductible. Cela simplifie le déploiement et limite les écarts entre les environnements.',
    usage:
      'Je l’utilise pour standardiser les projets, faciliter le lancement des services et créer des environnements de développement plus fiables.',
  },
];
