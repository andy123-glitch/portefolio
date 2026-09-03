import { Calendar, Contact, Mail, Pin } from 'lucide-react';
import Block from '../components/Block';
import React from 'react';
import SubTitle from '../components/SubTitle';
import BlockTitle from '../components/BlockTitle';

export default function About() {
  const personalInformation = [
    { Icon: Contact, label: 'Identité :', data: 'Andy Azerot' },
    { Icon: Mail, label: 'Email :', data: 'andy.azerot@gmail.com' },
    { Icon: Pin, label: 'Localisation :', data: 'Limoges, France' },
    { Icon: Calendar, label: 'Disponibilité :', data: 'Disponible pour freelance / CDI' },
  ];
  return (
    <Block id="about">
      <SubTitle>À propos</SubTitle>
      <BlockTitle>À propos de moi</BlockTitle>
      <div className="mt-3 grid grid-cols-1 gap-6 lg:mt-6 lg:grid-cols-[1fr_auto] lg:gap-15">
        <p className=" text-sm text-secondary-foreground lg:text-base">
          Passionné par le développement web , j'aime résoudre des problèmes complexes et créer des
          expériences numériques utiles et agréables. Full stack dans l'âme, je maîtrise aussi bien
          le frontend que le backend.
        </p>
        <div className="grid grid-cols-[18px_auto_1fr] gap-x-5 gap-y-3">
          {personalInformation.map(({ Icon, label, data }) => {
            const IconT = Icon;
            return (
              <React.Fragment key={label}>
                <IconT size={18} color="#00c8ff" />
                <div className="text-sm text-secondary-foreground lg:pr-15 lg:text-base">
                  {label}
                </div>
                <p className="text-sm lg:text-base">{data}</p>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Block>
  );
}
