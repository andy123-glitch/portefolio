import { type LucideIcon } from 'lucide-react';

interface Badgeprops {
  color?: string;
  children?: React.ReactNode;
  variant?: string;
  className?: string;
  Icon?: LucideIcon;
}

export default function Badge({
  color,
  children,
  variant = 'primary',
  className = '',
}: Badgeprops) {
  const variants: { [index: string]: string } = {
    primary:
      'inline-flex items-center gap-2 bg-tag-bg border border-border px-3 py-1.5 rounded-xl text-sm',
  };
  console.log(color);
  return (
    <div className={`${variants[variant]} ${className}`}>
      {color && (
        <span
          className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        ></span>
      )}
      {children}
    </div>
  );
}
