import { type ComponentPropsWithoutRef } from "react";

// On hérite de toutes les props standards d'une balise <h2> HTML
interface BlockProps extends ComponentPropsWithoutRef<"h2"> {
  className?: string;
  children: React.ReactNode;
}

export default function BlockTitle({ className = "", children, ...rest }: BlockProps) {
  return (
    <h2 className={`font-bold lg:text-2xl text-xl lg:mb-6 mb-3 ${className}`} {...rest}>
      {children}
    </h2>
  );
}