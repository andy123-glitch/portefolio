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
  { name: 'HTML', color: '#E34F26', icon: FileCode, category: 'frontend' },
  { name: 'CSS', color: '#1572B6', icon: Palette, category: 'frontend' },
  { name: 'JavaScript', color: '#F7DF1E', icon: Code2, category: 'frontend' },
  { name: 'TypeScript', color: '#3178C6', icon: FileJson, category: 'frontend' },
  { name: 'React', color: '#61DAFB', icon: Atom, category: 'frontend' },
  { name: 'Node.js', color: '#339933', icon: Server, category: 'backend' },
  { name: 'Express', color: '#E2E8F0', icon: Cpu, category: 'backend' },
  { name: 'Tailwind CSS', color: '#06B6D4', icon: Wind, category: 'frontend' },
  { name: 'MongoDB', color: '#47A248', icon: Database, category: 'backend' },
  { name: 'Git', color: '#F05032', icon: GitBranch, category: 'outil' },
  { name: 'Docker', color: '#2496ED', icon: Container, category: 'outil' },
];
