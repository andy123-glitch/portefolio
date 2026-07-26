import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import ProjectCard from '../components/ProjectCard';
import SubTitle from '../components/SubTitle';
import { projects } from '../datas/projectsData';

export default function Projects() {
  return (
    <Block id="projects">
      <SubTitle>PROJETS RÉCENTS</SubTitle>
      <BlockTitle>Mon parcours</BlockTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard project={p} />
        ))}
      </div>
    </Block>
  );
}
