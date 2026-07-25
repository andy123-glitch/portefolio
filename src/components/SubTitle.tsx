import { type ComponentPropsWithoutRef } from "react";

// On hérite de toutes les props standards d'une balise <div> HTML
interface BlockProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

export default function SubTitle({ className = "", children, ...rest }: BlockProps) {
  return (
    <div className={`uppercase font-semibold text-primary lg:text-sm text-xs ${className}`} {...rest}>
      {children}
    </div>
  );
}
