// Projets - données pour la section Projects
import { useEffect, useState } from 'react';
import { type Project } from '../types/index';
import grimoire from '../assets/prev_grimoire.webp';
import kasa from '../assets/prev_kasa.webp';
import suivi from '../assets/prev_suiv_de_fiche.webp';

const fallbackProjects: Project[] = [
  {
    id: 5,
    slug: 'suivi-alternance-greta',
    title: 'Suivi Alternance GRETA',
    description:
      'Développement de l’API backend pour la plateforme web de centralisation, de saisie et de validation des fiches de suivi hebdomadaires des alternants du réseau GRETA.',
    context:
      'Projet d’équipe réalisé à 3 développeurs visant à digitaliser le suivi pédagogique et entreprise. En charge intégrale de la partie backend, j’ai conçu l’architecture de la base de données, l’API RESTful avec Symfony / Doctrine et la sécurisation RBAC pour alimenter la SPA React développée par mes coéquipiers.',
    objectives: [
      'Concevoir et déployer une API RESTful robuste et documentée avec Symfony et Doctrine ORM',
      'Modéliser une base relationnelle MySQL complexe gérant les relations multi-acteurs (alternants, tuteurs, formateurs, promotions)',
      'Mettre en place le système d’authentification sécurisée par JWT et la gestion stricte des rôles et permissions (RBAC)',
      'Développer les endpoints métiers pour le workflow de validation des fiches (statuts, commentaires, alertes)',
      'Implémenter la logique d’import en masse (CSV/Excel) et d’export des données pour l’administration',
    ],
    stack: ['PHP', 'Symfony', 'Doctrine ORM', 'MySQL', 'JWT', 'Swagger/OpenAPI', 'Git'],
    skillsDeveloped: [
      'Architecture backend et développement d’API REST sécurisée sous Symfony',
      'Modélisation avancée de base de données relationnelle (schémas relationnels N:N, intégrité référentielle)',
      'Sécurisation des endpoints (authentification JWT, hachage Argon2/Bcrypt, contrôle d’accès RBAC)',
      'Documentation d’API interactive pour l’équipe front-end avec Swagger / OpenAPI',
      'Travail collaboratif en équipe de 3 avec Git (branches main, dev et feature branches)',
    ],
    results: [
      'API REST et entièrement interconnectée avec l’application front-end React',
      'Modèle de données scalable gérant l’ensemble du cycle de vie des fiches (brouillon, soumission, validation)',
      'Système automatisé de notifications et de relances par e-mail le lundi matin',
      'Documentation technique complète facilitant la collaboration et l’intégration continue avec le front-end',
    ],
    improvements: [
      'Mise en place de tests unitaires et fonctionnels automatisés côté backend (PHPUnit)',
      'Ajout d’un module backend pour la signature électronique cryptographique des fiches',
      'Mise en place d’un pipeline CI/CD pour automatiser les déploiements sur le serveur d’API',
      'Optimisation des requêtes complexes avec mise en cache (Redis) pour les exports volumineux',
    ],
    technologies: ['PHP', 'Symfony', 'Doctrine ORM', 'MySQL', 'JWT'],

    liveUrl: 'https://demo-suivide-fiche.andy-azerot.fr/',
    image: suivi,
    source: 'local',
  },
  {
    id: 2,
    slug: 'kasa-location-immobiliere',
    title: 'Kasa',
    description:
      'Refonte front-end complète de la plateforme de location de logements Kasa, passant d’un code legacy ASP.NET à une application moderne et responsive développée avec React.',
    context:
      'Projet réalisé dans le cadre de la formation Développeur Web d’OpenClassrooms. Mission en freelance pour refondre l’interface utilisateur à partir de maquettes Figma, intégrer une logique par composants et simuler les données via un mock JSON en attendant l’API backend.',
    objectives: [
      'Initialiser et structurer l’application moderne avec React et Vite selon les coding guidelines',
      'Configurer la navigation et le routage dynamique avec React Router (Accueil, À propos, Fiche logement, 404)',
      'Développer des composants réutilisables et interactifs (Gallery/Slideshow infini, accordéons Collapse animés)',
      'Intégrer les maquettes et prototypes Figma avec un rendu responsive ',
    ],
    stack: ['React', 'React Router', 'Vite', 'Sass', 'JavaScript'],
    skillsDeveloped: [
      'Architecture et découpage d’une application en composants fonctionnels React réutilisables',
      'Gestion de l’état local (hooks useState, useEffect) et manipulation des props',
      'Gestion du routage dynamique (React Router v6) et des redirections d’erreurs (ID de logement invalide, page 404)',
      'Intégration d’animations CSS fluides et respect strict des maquettes/prototypes interactifs Figma',
      'Consommation et injection de données structurées (JSON) dans une interface dynamique',
    ],
    results: [
      'Application web fluide, moderne et 100 % responsive (mobile, tablette, desktop)',
      'Carrousel d’images intelligent avec boucle infinie, compteur dynamique et gestion du cas d’image unique',
      'Composants Collapse configurables, réutilisables et animés à l’ouverture/fermeture',
      'Code propre, maintenable et prêt pour l’interconnexion future avec l’API Node.js',
    ],
    improvements: [
      'Connexion à une API REST finale dès la mise en ligne du backend ',
      'Ajout d’un système de filtres de recherche multi-critères (prix, localisation, équipements)',
      'Mise en place d’une suite de tests unitaires et de composants avec Vitest et React Testing Library',
      'Optimisation du lazy loading des images pour améliorer les scores Core Web Vitals',
    ],
    technologies: ['React', 'React Router', 'Vite', 'Sass'],

    githubUrl: 'https://github.com/andy123-glitch/Kasa-React',
    liveUrl: 'https://kasa.andy-azerot.fr/',
    image: kasa,
    source: 'local',
  },
  {
    id: 3,
    slug: 'mon-vieux-grimoire-api',
    title: 'Mon Vieux Grimoire',
    description:
      'Développement de l’API backend pour la chaîne de librairies "Le Vieux Grimoire", permettant la gestion du catalogue de livres, l’authentification et la notation communautaire.',
    context:
      'Projet réalisé dans le cadre de la formation Développeur Web d’OpenClassrooms. Collaboration sur une architecture découplée : développement de l’API Node.js/Express pour alimenter une application front-end React à partir de spécifications fonctionnelles et de maquettes précises.',
    objectives: [
      'Concevoir et déployer une API REST sécurisée et documentée',
      'Mettre en place l’authentification utilisateur sécurisée (JWT, hachage bcrypt)',
      'Implémenter les opérations CRUD pour la gestion des livres et le système de notation (calcul des moyennes)',
      'Optimiser le traitement et le stockage des images envoyées par les utilisateurs (redimensionnement, compression)',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer', 'Sharp', 'JWT'],
    skillsDeveloped: [
      'Conception d’API RESTful et gestion du routage modulaire Express',
      'Modélisation et requêtage de base de données NoSQL avec Mongoose',
      'Sécurisation des endpoints (tokens JWT, validation des entrées, variables d’environnement)',
      'Traitement et optimisation de fichiers médias côté serveur',
      'Collaboration technique sur une architecture séparée Front/Back',
    ],
    results: [
      'API backend 100 % fonctionnelle et connectée au front-end React',
      'Système complet de notation et de mise à jour dynamique de la note moyenne des livres',
      'Optimisation automatique des images pour réduire les temps de chargement et l’empreinte de stockage',
      'Respect des bonnes pratiques de sécurité (OWASP, protection des données d’authentification)',
    ],
    improvements: [
      'Mise en place de tests unitaires et d’intégration automatisés (Jest, Supertest)',
      'Documentation interactive de l’API avec Swagger / OpenAPI',
      'Pagination des résultats pour le catalogue de livres',
      'Gestion avancée des rôles et autorisations utilisateurs',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer', 'Sharp'],

    githubUrl: 'https://github.com/andy123-glitch/backend-ocr-livre',
    image: grimoire,
    source: 'local',
  },
];

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME ?? 'andy123-glitch';
const githubTopicFilter = 'portfolio';

type GitHubRepo = {
  id?: number;
  name?: string;
  description?: string | null;
  private?: boolean;
  fork?: boolean;
  language?: string | null;
  homepage?: string | null;
  html_url?: string | null;
  updated_at?: string;
  topics?: string[];
};

function normaliseTitle(name: string) {
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPlaceholderImage(name: string, index: number) {
  const label = name.replace(/[-_]+/g, ' ').trim() || `Projet ${index + 1}`;
  const encodedLabel = encodeURIComponent(label.slice(0, 20));

  return `https://placehold.co/600x400/0a0f1e/00c8ff?text=${encodedLabel}`;
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=10`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = (await response.json()) as GitHubRepo[];

    if (!Array.isArray(repos)) {
      return [];
    }

    const publicRepos = repos
      .filter(
        (repo) =>
          !repo.private &&
          !repo.fork &&
          Boolean(repo.name) &&
          repo.topics?.includes(githubTopicFilter)
      )
      .sort((a, b) => new Date(b.updated_at ?? 0).getTime() - new Date(a.updated_at ?? 0).getTime())
      .slice(0, 6);

    if (publicRepos.length === 0) {
      return [];
    }

    return publicRepos.map((repo, index) => {
      const name = repo.name ?? `project-${index + 1}`;
      const title = normaliseTitle(name);
      const technologies = repo.language ? [repo.language] : ['GitHub'];

      return {
        id: Number(repo.id ?? index + 1),
        slug: name,
        title,
        description: repo.description || `Projet public GitHub : ${title}.`,
        context: 'Dépôt public GitHub mis à jour automatiquement depuis le profil GitHub.',
        objectives: [
          'Afficher le dépôt public et l’état du projet',
          'Présenter la stack principale',
        ],
        stack: technologies,
        skillsDeveloped: ['Projet public GitHub', 'Développement technique'],
        results: ['Dépôt synchronisé depuis GitHub', 'Mise à jour automatique du portfolio'],
        improvements: ['Compléter la description technique du projet'],
        technologies,
        githubUrl: repo.html_url ?? undefined,
        liveUrl: repo.homepage || undefined,
        image: getPlaceholderImage(name, index),
        source: 'github' as const,
      };
    });
  } catch (error) {
    console.error('Unable to load GitHub projects, no GitHub section will be displayed.', error);
    return [];
  }
}

export function useProjects() {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);

  useEffect(() => {
    let active = true;

    fetchGitHubProjects().then((data) => {
      if (!active) {
        return;
      }

      setGithubProjects(data);
    });

    return () => {
      active = false;
    };
  }, []);

  return {
    localProjects: fallbackProjects,
    githubProjects,
    projects: [...fallbackProjects, ...githubProjects],
  };
}

export { fallbackProjects as projects };
