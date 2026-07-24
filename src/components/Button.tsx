/**
 * Composant Button réutilisable
 * @param {string} variant - "primary" | "secondary" | "icon"
 * @param {React.ReactNode} children
 * @param {string} className - classes additionnelles
 * @param {object} rest - props passées à l'élément (href, onClick, type...)
 */
export default function Button({ variant = "primary", size = "sm" ,children, className = "", ...rest }) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]",
    secondary: "border border-border text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,200,255,0.25)]",
    icon: "border border-border bg-secondary/40 text-secondary-foreground hover:border-primary hover:text-primary hover:bg-secondary",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-7 py-3",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className} ${sizes[size]} `} {...rest}>
      {children}
    </button>
  );
}
