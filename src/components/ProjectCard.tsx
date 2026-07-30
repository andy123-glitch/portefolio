import { ArrowRight } from 'lucide-react';
import { type Project } from '../types/index';
import { FaGithub } from 'react-icons/fa6';
import Button from './Button';
import Badge from './Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]">
      <div className="relative h-48 overflow-hidden">
        <img
          alt={"Capture d'écran de la page d'accueil du projet " + project.title}
          src={project.image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.githubUrl && (
          <div className="absolute top-0 right-0 p-1 h-fit w-fit bg-black/80 rounded-bl-2xl">
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
        <p className=" text-sm text-secondary-foreground lg:text-base flex-1">
          {project.description}
        </p>

        <details className="text-sm text-secondary-foreground">
          <summary className="cursor-pointer font-medium text-foreground">
            Détails du projet
          </summary>
          <div className="mt-2 grid gap-2">
            {project.context && (
              <p>
                <span className="font-semibold text-foreground">Contexte :</span> {project.context}
              </p>
            )}
            {project.objectives && project.objectives.length > 0 && (
              <p>
                <span className="font-semibold text-foreground">Objectifs :</span>{' '}
                {project.objectives.join(' • ')}
              </p>
            )}
            {project.stack && project.stack.length > 0 && (
              <p>
                <span className="font-semibold text-foreground">Stack :</span>{' '}
                {project.stack.join(', ')}
              </p>
            )}
            {project.skillsDeveloped && project.skillsDeveloped.length > 0 && (
              <p>
                <span className="font-semibold text-foreground">Compétences développées :</span>{' '}
                {project.skillsDeveloped.join(', ')}
              </p>
            )}
            {project.results && project.results.length > 0 && (
              <p>
                <span className="font-semibold text-foreground">Résultats :</span>{' '}
                {project.results.join(' • ')}
              </p>
            )}
            {project.improvements && project.improvements.length > 0 && (
              <p>
                <span className="font-semibold text-foreground">Perspectives d'amélioration :</span>{' '}
                {project.improvements.join(' • ')}
              </p>
            )}
          </div>
        </details>

        <div className="flex flex-wrap gap-1.75">
          {project.technologies.map((tech) => (
            <Badge key={`${project.title}-${tech}`} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
          >
            Voir le projet <ArrowRight size={16} />
          </a>
        ) : (
          <p className="text-sm font-semibold text-muted-foreground">
            Pas de lien disponible pour ce projet
          </p>
        )}
      </div>
    </article>
  );
}
