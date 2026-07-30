import Badge from '../components/Badge';
import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import SubTitle from '../components/SubTitle';
import { skills } from '../datas/skillsData';

export default function Skills() {
  return (
    <Block id="skills">
      <SubTitle>Compétences</SubTitle>
      <BlockTitle>Mes compétences</BlockTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <Badge variant="primary" skill={skill}>
              {skill.name}
            </Badge>
          );
        })}
      </div>
    </Block>
  );
}
