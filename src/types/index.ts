import { type LucideIcon } from 'lucide-react';
export interface Skill {
  name: string;
  color: string;
  icon: LucideIcon;
  category?: 'frontend' | 'backend' | 'outil';
  description: string;
  usage: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  context?: string;
  objectives?: string[];
  stack?: string[];
  skillsDeveloped?: string[];
  results?: string[];
  improvements?: string[];
  image: string;
  technologies: string[];
  liveUrl?: string; // Optionnel (ex: "Voir le projet")
  githubUrl?: string; // Optionnel
  source?: 'local' | 'github';
}

export interface Experience {
  id: number;
  period: string;
  city: string;
  role: string;
  company: string;
  technologies: string[];
}
