import React from 'react';

// Props communes
interface BaseProps {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children?: React.ReactNode;
  className?: string;
}

// Type pour quand c'est un lien (<a>)
type LinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string; // href est obligatoire si présent
  };

// Type pour quand c'est un bouton (<button>)
type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkProps | NativeButtonProps;

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer';

  const variants: { [index: string]: string } = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] ',
    secondary:
      'border border-border text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(0,200,255,0.25)]',
    icon: 'border border-border bg-secondary/40 text-secondary-foreground hover:border-primary hover:text-primary hover:bg-secondary',
  };

  const sizes: { [index: string]: string } = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-7 py-3',
    icon: 'h-10 w-10 p-0',
  };

  const combinedClasses = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  // Si 'href' existe dans props, on rend un lien <a>
  if ('href' in rest && rest.href) {
    return (
      <a className={combinedClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
