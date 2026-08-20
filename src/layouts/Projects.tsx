import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import ProjectCard from '../components/ProjectCard';
import SubTitle from '../components/SubTitle';
import { useProjects } from '../datas/projectsData';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { localProjects } = useProjects();

  return (
    <Block id="projects">
      <SubTitle>PROJETS RÉCENTS</SubTitle>
      <BlockTitle>Mes projets</BlockTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
        {localProjects.slice(0, 3).map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
      <Link
        to="/projets"
        className="mt-8 inline-flex rounded-lg border border-primary px-5 py-2.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Voir tous les projets
      </Link>
    </Block>
  );
}
