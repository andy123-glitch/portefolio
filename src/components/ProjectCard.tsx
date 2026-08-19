import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { type Project } from '../types/index';
import Badge from './Badge';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]">
      <div className="relative h-48 overflow-hidden">
        <img
          alt={`Capture d'écran de la page d'accueil du projet ${project.title}`}
          src={project.image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.githubUrl && (
          <div className="absolute top-0 right-0 h-fit w-fit rounded-bl-2xl bg-black/80 p-1">
            <Button
              href={project.githubUrl}
              size="icon"
              variant="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le projet sur GitHub"
            >
              <FaGithub size={25} className="text-accent shadow-2xl" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 p-3">
        <h3 className="text-base font-bold">{project.title}</h3>
        <p className="flex-1 text-sm text-secondary-foreground lg:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge key={`${project.slug}-${technology}`} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>
        <Link
          to={`/projets/${project.slug}`}
          className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
        >
          Voir le projet <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
