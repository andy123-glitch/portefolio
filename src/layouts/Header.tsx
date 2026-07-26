import React, { useRef } from 'react';
import { navLinks } from '../datas/navData.ts';
export default function Header() {
  const linkRef = useRef(null);

  const handleUnderline = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget != document.querySelector('a#nav-links.underline')
      ? document.querySelector('a#nav-links.underline')?.classList.remove('underline')
      : null;
    e.currentTarget.classList.toggle('underline');
  };
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 not-sm:flex-col not-md:px-0">
        {/* Logo */}
        <a href="#accueil" className="font-mono text-lg font-bold text-foreground not-md:text-base">
          <span className="text-primary">{'<'}</span>
          <span className="text-muted-foreground">{'/'}</span>
          <span className="text-primary">{'>'}</span> kcatSlluFveD
        </a>
        {/* Liens - desktop */}
        <ul ref={linkRef} className="flex items-center gap-3 md:gap-8">
          {navLinks.map((link: { label: string; href: string }) => (
            <li key={link.href}>
              <a
                id="nav-links"
                href={link.href}
                className="text-xs text-secondary-foreground underline-offset-1 transition-colors hover:text-primary md:text-sm"
                onClick={(e) => handleUnderline(e)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
