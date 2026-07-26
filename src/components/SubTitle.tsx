import { type ComponentPropsWithoutRef } from 'react';

// On hérite de toutes les props standards d'une balise <div> HTML
interface BlockProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  children: React.ReactNode;
}

export default function SubTitle({ className = '', children, ...rest }: BlockProps) {
  return (
    <div
      className={`text-xs font-semibold text-primary uppercase lg:text-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
