import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import Badge from '../components/Badge';
import { projects } from '../datas/projectsData';

interface DetailListProps {
  title: string;
  items?: string[];
}

function DetailList({ title, items }: DetailListProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <ul className="grid list-disc gap-2 pl-5 text-secondary-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectNotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-2 text-sm font-semibold tracking-widest text-primary">PROJET INTROUVABLE</p>
      <h1 className="mb-4 text-3xl font-bold">Ce projet n’existe pas.</h1>
      <Link to="/projets" className="w-fit font-semibold text-primary hover:text-foreground">
        Retourner à tous les projets
      </Link>
    </main>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pt-28 pb-16">
      <Link
        to="/projets"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} /> Tous les projets
      </Link>

      <article className="grid gap-10">
        <header>
          <p className="mb-2 text-sm font-semibold tracking-widest text-primary">PROJET</p>
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{project.title}</h1>
          <p className="max-w-3xl text-lg text-secondary-foreground">{project.description}</p>
        </header>

        <img
          src={project.image}
          alt={`Capture d'écran de la page d'accueil du projet ${project.title}`}
          className="max-h-130 w-full rounded-xl border border-border object-cover"
        />

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Voir la démo <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Voir sur GitHub <FaGithub size={16} />
            </a>
          )}
        </div>

        <div className="grid gap-8 rounded-xl border border-border bg-card p-6">
          {project.context && (
            <section>
              <h2 className="mb-3 text-xl font-bold">Contexte</h2>
              <p className="text-secondary-foreground">{project.context}</p>
            </section>
          )}
          <DetailList title="Objectifs" items={project.objectives} />
          <DetailList title="Stack technique" items={project.stack} />
          <DetailList title="Compétences développées" items={project.skillsDeveloped} />
          <DetailList title="Résultats" items={project.results} />
          <DetailList title="Perspectives d’amélioration" items={project.improvements} />
        </div>
      </article>
    </main>
  );
}
