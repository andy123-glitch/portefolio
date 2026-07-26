import { type Experience } from '../types/index';

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
  isFisrt: boolean;
}

export default function ExperienceCard({
  experience,
  isLast = false,
  isFisrt = false,
}: ExperienceCardProps) {
  return (
    <div className="bg-card-bg grid grid-cols-[20px_1fr] gap-4 rounded-xl px-3 py-2 text-xs">
      <div className="relative md:pt-5 pt-3.5r">
        {isFisrt ? (
          <div className="h-5 w-5 rounded-xl bg-primary"></div>
        ) : (
          <div className="h-5 w-5 rounded-xl bg-muted-foreground"></div>
        )}
        {!isLast && <div className="absolute left-2.25 h-full w-0.5 bg-border"></div>}
      </div>
      <div className="flex flex-col transition-all hover:scale-[1.02]">
        <p className="text-muted-foreground">
          {experience.period} / {experience.city}
        </p>
        <h3 className="text-base font-semibold m-0 text-card-foreground lg:text-lg">
          {experience.role}
        </h3>
        <p className="text-justify text-sm text-secondary-foreground lg:text-base">
          {experience.description}
        </p>
        <div className="flex gap-x-1.75">
          {experience.technologies.map((tech) => (
            <span
              className="rounded-sm border border-border bg-tag-bg px-2.5 py-1 text-xs text-muted-foreground"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
