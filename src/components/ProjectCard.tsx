import { ArrowRight } from "lucide-react";
import { type Project } from "../types/index";

interface ProjectCardProps {
  project: Project;
  isLast: boolean;
  isFisrt: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-border bg-card rounded-lg grid grid-rows-[auto_1fr] overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]  ">
      <div className="relative overflow-hidden h-48">
        <img src={project.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-col gap-4 p-3">
        <h3 className="font-bold text-base">{project.title}</h3>
        <p className="text-secondary-foreground text-sm">{project.description}</p>
        <div className="flex gap-x-1.75">
          {project.technologies.map((tech) => (
            <span className="border border-border bg-tag-bg text-muted-foreground text-xs rounded-sm px-2.5 py-1" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm inline-flex cursor-pointer gap-1 w-fit font-semibold hover:gap-2 transition-all items-center ">
          Voir le projet <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
