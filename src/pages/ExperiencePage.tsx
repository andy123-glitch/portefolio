import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../datas/experienceData';

export default function ExperiencePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pt-28 pb-16">
      <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">PARCOURS</p>
      <h1 className="mb-3 text-3xl font-bold lg:text-4xl">Mon expérience</h1>
      <p className="mb-10 max-w-2xl text-secondary-foreground">
        Un aperçu de mes formations et de mes expériences professionnelles, avec les compétences
        associées à chaque étape.
      </p>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            experience={experience}
            isFisrt={index === 0}
            isLast={index + 1 === experiences.length}
            key={'experience-page-' + experience.id}
          />
        ))}
      </div>
    </main>
  );
}
