import { type Skill } from '../types/index';

interface Badgeprops {
  children?: React.ReactNode;
  className?: string;
  skill?: Skill;
  variant?: 'primary' | 'secondary' | 'icon';
}

export default function Badge({
  children,
  variant = 'primary',
  className = '',
  skill,
}: Badgeprops) {
  const variants: { [index: string]: string } = {
    primary:
      'inline-flex items-center gap-2 bg-tag-bg border border-border px-3 py-1.5 rounded-xl text-sm',
    secondary:
      'rounded-sm border border-border bg-tag-bg px-2.5 py-1 text-xs text-muted-foreground',
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {skill && <skill.icon color={skill.color} size={20} />}
      {children}
    </div>
  );
}
