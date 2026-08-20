import { type Skill } from '../types/index';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ...props
}: BadgeProps) {
  const baseInteractive =
    'group relative overflow-hidden transition-all duration-300 ease-out motion-safe:animate-[badgeFloat_3s_ease-in-out_infinite]';

  const variants: { [index: string]: string } = {
    primary: `${baseInteractive} inline-flex items-center gap-2 rounded-xl border border-border bg-tag-bg px-3 py-1.5 text-sm hover:-translate-y-0.5 hover:border-primary/70 hover:shadow-[0_0_22px_rgba(0,200,255,0.24)]`,
    secondary: `${baseInteractive} inline-flex items-center gap-2 rounded-sm border border-border bg-tag-bg px-2.5 py-1 text-xs text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_14px_rgba(0,200,255,0.12)]`,
  };

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full z-0" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {skill && <skill.icon color={skill.color} size={20} />}
        {children}
      </span>
    </div>
  );
}
