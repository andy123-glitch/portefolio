import { type Experience } from "../types/index";

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
  isFisrt: boolean;
}

export default function ExperienceCard({ experience, isLast = false, isFisrt = false }: ExperienceCardProps) {
  return (
    <div className="text-xs grid grid-cols-[20px_1fr] gap-4 bg-card-bg rounded-xl px-3 py-4  ">
      <div className="relative">
        {isFisrt ? <div className="h-5 w-5 bg-primary rounded-xl"></div> : <div className="h-5 w-5 bg-muted-foreground rounded-xl"></div>}
        {!isLast && <div className="absolute left-2.25 h-full w-0.5 bg-border "></div>}
      </div>
      <div className="flex flex-col gap-2 transition-all hover:scale-[1.02]">
        <p className=" text-muted-foreground">
          {experience.period} / {experience.city}
        </p>
        <h3 className="text-sm font-semibold text-card-foreground">{experience.role}</h3>
        <p className=" text-secondary-foreground">{experience.description}</p>
        <div className="flex gap-x-1.75">
          {experience.technologies.map((tech) => (
            <span className="border border-border bg-tag-bg text-muted-foreground text-xs rounded-sm px-2.5 py-1" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
