// Projets - données pour la section Projects
import { useEffect, useState } from 'react';
import { type Project } from '../types/index';
import grimoire from '../assets/prev_grimoire.webp';
import kasa from '../assets/prev_kasa.webp';
import suivi from '../assets/prev_suiv_de_fiche.webp';

const fallbackProjects: Project[] = [
  {
    id: 1,
    slug: 'suivi-de-fiches',
    title: 'Suivi de fiches',
    description:
      'Application de suivi et de gestion des fiches de stage des alternants, centralisant les tâches, les commentaires et les formations.',
    context:
      'Projet interne développé dans le cadre de la formation DWWM au GRETA du Limousin, afin de faciliter le suivi des alternants et la gestion administrative liée aux stages.',
    objectives: [
      'centraliser les informations de suivi des alternants',
      'simplifier la gestion des tâches et des validations',
      'améliorer la communication entre les responsables et les étudiants',
    ],
    stack: ['PHP', 'Symfony', 'MySQL', 'Docker'],
    skillsDeveloped: [
      'développement backend',
      'gestion de base de données relationnelle',
      'conception d’interfaces de gestion',
      'déploiement d’une application conteneurisée',
    ],
    results: [
      'mise en place d’un outil de suivi fonctionnel pour plusieurs utilisateurs',
      'organisation plus claire des dossiers de stage',
      'réduction des tâches manuelles liées au suivi administratif',
    ],
    improvements: [
      'ajout d’un tableau de bord analytique',
      'mise en place de rappels automatiques et de notifications',
      'amélioration de l’accessibilité et de l’expérience utilisateur',
    ],
    technologies: ['MySQL', 'PHP', 'Symfony', 'Docker'],
    liveUrl: 'https://alternant.greta-digital.fr/',
    image: suivi,
  },
  {
    id: 2,
    slug: 'kasa-react',
    title: 'Kasa',
    description:
      'Application web de location de logements entre particuliers, conçue comme une Single Page Application moderne et réactive.',
    context:
      'Projet réalisé dans le cadre de ma formation Développeur Web d’OpenClassrooms, avec pour objectif de mettre en pratique les fondamentaux de React et de la navigation client-side.',
    objectives: [
      'créer une interface moderne et fluide pour la consultation de logements',
      'implémenter une navigation multi-pages côté client',
      'appliquer les bonnes pratiques de composants React et de gestion d’état',
    ],
    stack: ['React', 'SCSS', 'React Router'],
    skillsDeveloped: [
      'architecture de composants React',
      'création d’une SPA responsive',
      'gestion de la navigation et du routage',
      'stylisation avec SCSS',
    ],
    results: [
      'déploiement d’une interface claire et moderne',
      'présentation soignée des logements avec une expérience fluide',
      'respect des attentes pédagogiques du projet de formation',
    ],
    improvements: [
      'ajout d’un système de filtres avancés',
      'intégration d’un formulaire de réservation',
      'optimisation des performances et de l’accessibilité',
    ],
    technologies: ['React', 'SCSS', 'React Router'],
    githubUrl: 'https://github.com/andy123-glitch/Kasa-React',
    liveUrl: 'https://kasa.andy-azerot.fr/',
    image: kasa,
  },
  {
    id: 3,
    slug: 'grimoire-api',
    title: 'Grimoire',
    description:
      'API backend du projet OCR Livre, développée pour gérer les utilisateurs, les livres et le traitement des images.',
    context:
      'Projet backend développé dans le cadre d’une mise en pratique des concepts Node.js, Express et gestion des données applicatives avec MongoDB.Ce projet a été réalisé dans ma formation Développeur Web d’OpenClassrooms,',
    objectives: [
      'mettre en place une API sécurisée et maintenable',
      'gérer l’authentification des utilisateurs',
      'traiter les données liées aux livres et aux images',
    ],
    stack: ['Express', 'MongoDB', 'Node.js'],
    skillsDeveloped: [
      'conception d’API REST',
      'gestion de l’authentification',
      'intégration de base de données NoSQL',
      'traitement des ressources backend',
    ],
    results: [
      'API backend fonctionnelle pour la gestion des utilisateurs et des livres',
      'organisation des endpoints selon une logique métier cohérente',
      'développement d’une base solide pour une application plus large',
    ],
    improvements: [
      'ajout de tests automatisés',
      'renforcement de la sécurité avec des règles plus strictes',
      'amélioration de la gestion des erreurs et de la documentation API',
    ],
    technologies: ['Express', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com/andy123-glitch/backend-ocr-livre',
    image: grimoire,
  },
];

const githubImages = [suivi, kasa, grimoire];
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME ?? 'andy123-glitch';

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
};

function normaliseTitle(name: string) {
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=100`,
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
      return fallbackProjects;
    }

    const publicRepos = repos
      .filter((repo) => !repo.private && !repo.fork && Boolean(repo.name))
      .sort((a, b) => new Date(b.updated_at ?? 0).getTime() - new Date(a.updated_at ?? 0).getTime())
      .slice(0, 6);

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
        image: githubImages[index % githubImages.length],
      };
    });
  } catch (error) {
    console.error('Unable to load GitHub projects, using fallback projects instead.', error);
    return fallbackProjects;
  }
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    let active = true;

    fetchGitHubProjects().then((data) => {
      if (active) {
        setProjects(data);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return { projects };
}

export { fallbackProjects as projects };
