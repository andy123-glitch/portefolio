import { ArrowRight } from 'lucide-react';
import { type KeyboardEvent, type MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type Project } from '../types/index';
import Badge from './Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const isGithubProject = project.source === 'github';

  const handleCardClick = (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('a, button')) {
      return;
    }

    if (isGithubProject && project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(`/projets/${project.slug}`);
  };

  return (
    <article
      className="group grid h-full cursor-pointer grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]"
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleCardClick(event);
        }
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          alt={`Capture d'écran de la page d'accueil du projet ${project.title}`}
          src={project.image}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {project.githubUrl && !isGithubProject && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="absolute top-2 right-2 z-10 inline-flex items-center rounded-full border border-primary/60 bg-slate-900/90 px-2.5 py-1 text-[12px] font-semibold text-primary shadow-[0_0_12px_rgba(0,200,255,0.2)] backdrop-blur-sm"
          >
            Aller sur GitHub
          </a>
        )}
      </div>
      <div className="flex flex-col gap-4 p-3 h-full">
        <h3 className="text-base font-bold">{project.title}</h3>

        {!isGithubProject && (
          <p className="flex-1 text-sm text-secondary-foreground lg:text-base">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge key={`${project.slug}-${technology}`} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>

        {isGithubProject ? (
          <a
            href={project.githubUrl || (isGithubProject ? project.githubUrl : undefined)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
          >
            Aller sur GitHub <ArrowRight size={16} />
          </a>
        ) : (
          <Link
            to={`/projets/${project.slug}`}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
          >
            Voir le projet <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </article>
  );
}
