import { type ComponentPropsWithoutRef } from "react";

// On hérite de toutes les props standards d'une balise <section> HTML
interface BlockProps extends ComponentPropsWithoutRef<"section"> {
  className?: string;
  children: React.ReactNode;
}

export default function Block({ className = "", children, ...rest }: BlockProps) {
  return (
    <section className={`scroll-mt-24 mb-50 ${className}`} {...rest}>
      {children}
    </section>
  );
}
