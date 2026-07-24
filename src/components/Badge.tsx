interface Badgeprops {
  color?: string;
  children?: React.ReactNode;
  variant?: string;
  className?: string;
}

export default function Badge({ color = "", children, variant = "default", className = "" }: Badgeprops) {
  const variants: { [index: string]: string } = {
    default: "inline-flex items-center gap-2 bg-tag-bg border border-border text-secondary-foreground px-3 py-1 rounded-md text-sm",
    intro: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {color && <span className={`bg-[${color}] h-3 w-3 rounded-xl`}></span>}
      {children}
    </div>
  );
}
