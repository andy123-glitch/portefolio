import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../datas/projectsData';

export default function ProjectsPage() {
  const { projects } = useProjects();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pt-28 pb-16">
      <p className="mb-2 text-sm font-semibold tracking-widest text-primary">PORTFOLIO</p>
      <h1 className="mb-3 text-3xl font-bold lg:text-4xl">Tous mes projets</h1>
      <p className="mb-10 max-w-2xl text-secondary-foreground">
        Découvrez une sélection de projets réalisés avec des technologies et des enjeux variés.
      </p>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
