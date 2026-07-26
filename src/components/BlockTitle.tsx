import { type ComponentPropsWithoutRef } from 'react';

// On hérite de toutes les props standards d'une balise <h2> HTML
interface BlockProps extends ComponentPropsWithoutRef<'h2'> {
  className?: string;
  children: React.ReactNode;
}

export default function BlockTitle({ className = '', children, ...rest }: BlockProps) {
  return (
    <h2 className={`mb-3 text-xl font-bold lg:mb-6 lg:text-2xl ${className}`} {...rest}>
      {children}
    </h2>
  );
}
