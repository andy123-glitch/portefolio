import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import ExperienceCard from '../components/ExperienceCard';
import SubTitle from '../components/SubTitle';
import { experiences } from '../datas/experienceData';

export default function Experiences() {
  return (
    <Block id="experience">
      <SubTitle>EXPÉRIENCE</SubTitle>
      <BlockTitle>Mon parcours</BlockTitle>
      <div>
        {experiences.map((e, index) => (
          <ExperienceCard
            experience={e}
            isFisrt={index === 0}
            isLast={index + 1 === experiences.length}
            key={'ec-' + e.id}
          />
        ))}
      </div>
    </Block>
  );
}
