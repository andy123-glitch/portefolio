import { type Experience } from '../types/index';
import Badge from './Badge';

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
    <div className="bg-card-bg grid grid-cols-[20px_1fr] gap-4 rounded-xl pb-4 text-xs">
      <div className="relative md:pt-6.75 pt-3">
        {isFisrt ? (
          <div className="h-5 w-5 rounded-xl bg-primary"></div>
        ) : (
          <div className="h-5 w-5 rounded-xl bg-muted-foreground"></div>
        )}
        {!isLast && <div className="absolute left-2.25 h-full w-0.5 bg-border"></div>}
      </div>
      <div className="flex flex-col transition-all hover:scale-[1.02] gap-0.5">
        <p className="text-muted-foreground mt-1">
          {experience.period} / {experience.city}
        </p>
        <h3 className="text-base font-semibold m-0 text-card-foreground lg:text-lg">
          {experience.role}
        </h3>
        <div className="flex gap-x-1.75">
          {experience.technologies.map((tech) => (
            <Badge key={'et' + experience.id + '-' + tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
