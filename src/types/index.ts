export interface Skill {
  name: string;
  icon: string; // Nom de l'icône Lucide ou chemin SVG
  category: "frontend" | "backend" | "outil"; // Optionnel, pour filtrer
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string; // Optionnel (ex: "Voir le projet")
  githubUrl?: string; // Optionnel
}

export interface Experience {
  id: string;
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
