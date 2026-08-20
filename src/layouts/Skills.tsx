import { useState } from 'react';
import Badge from '../components/Badge';
import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import SubTitle from '../components/SubTitle';
import { skills } from '../datas/skillsData';
import { type Skill } from '../types/index';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <>
      <Block id="skills">
        <SubTitle>Compétences</SubTitle>
        <BlockTitle>Mes compétences</BlockTitle>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            return (
              <Badge
                variant="primary"
                skill={skill}
                key={'sk-' + skill.name}
                onClick={() => setSelectedSkill(skill)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedSkill(skill);
                  }
                }}
                className="cursor-pointer"
              >
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </Block>

      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
            className="relative w-full max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-[0_0_30px_rgba(15,23,42,0.7)] md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-lg text-secondary-foreground transition-colors hover:text-primary"
              aria-label="Fermer la fenêtre de compétence"
            >
              ×
            </button>

            <h3 id="skill-modal-title" className="mb-6 text-2xl font-bold text-foreground">
              {selectedSkill.name}
            </h3>

            <div
              className="mx-auto mb-6 flex h-52 w-[80%] items-center justify-center rounded-2xl border border-primary/30 shadow-[0_0_20px_rgba(0,200,255,0.15)]"
              style={{
                background: `linear-gradient(135deg, ${selectedSkill.color}22, rgba(15, 23, 42, 0.9))`,
              }}
            >
              <selectedSkill.icon color={selectedSkill.color} size={84} />
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-secondary-foreground md:text-base">
              <p>{selectedSkill.description}</p>
              <p>{selectedSkill.usage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
