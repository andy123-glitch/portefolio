import { ArrowRight } from 'lucide-react';
import { type Project } from '../types/index';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]">
      <div className="relative h-48 overflow-hidden">
        <img
        alt={project.title}
          src={project.image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 p-3">
        <h3 className="font-bold text-base">{project.title}</h3>
        <p className="text-justify text-sm text-secondary-foreground lg:text-base">{project.description}</p>
        <div className="flex gap-x-1.75">
          {project.technologies.map((tech) => (
            <span
              className="rounded-sm border border-border bg-tag-bg px-2.5 py-1 text-xs text-muted-foreground"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
        >
          Voir le projet <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
