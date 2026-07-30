import { Calendar, Contact, Mail, Pin } from 'lucide-react';
import Block from '../components/Block';
import SubTitle from '../components/SubTitle';
import BlockTitle from '../components/BlockTitle';

export default function About() {
  const personal_inforamtion = [
    { Icon: Contact, label: 'Nom :', data: 'Azerot ' },
    { Icon: Mail, label: 'Email :', data: 'andy.azerot@gmail.com ' },
    { Icon: Pin, label: 'Localisation :', data: 'Limoges,France ' },
    { Icon: Calendar, label: 'Disponibilité :', data: 'Disponible pour freelance / CDI' },
  ];
  return (
    <Block id="about">
      <SubTitle>A propos</SubTitle>
      <BlockTitle>A propos de moi</BlockTitle>
      <div className="mt-3 grid grid-cols-1 gap-6 lg:mt-6 lg:grid-cols-[1fr_auto] lg:gap-15">
        <p className=" text-sm text-secondary-foreground lg:text-base">
          Passionné par le développement web depuis plusieurs années, j'aime résoudre des problèmes
          complexes et créer des expériences numériques utiles et agréables. Fullstack dans l'âme,
          je maîtrise aussi bien le frontend que le backend.
        </p>
        <div className="grid grid-cols-[18px_auto_1fr] gap-x-5 gap-y-3">
          {personal_inforamtion.map(({ Icon, label, data }) => {
            const IconT = Icon;
            return (
              <>
                <IconT size={18} color="#00c8ff" />
                <div className="text-sm text-secondary-foreground lg:pr-15 lg:text-base">
                  {label}
                </div>
                <p className="text-sm lg:text-base">{data}</p>
              </>
            );
          })}
        </div>
      </div>
    </Block>
  );
}
