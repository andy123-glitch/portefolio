import React, { useRef } from "react";
import { navLinks } from "../datas/navData.ts";
export default function Header() {
  const linkRef = useRef(null);

  const handleUnderline = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget != document.querySelector("a#nav-links.underline") ? document.querySelector("a#nav-links.underline")?.classList.remove("underline") : null;
    e.currentTarget.classList.toggle("underline");
  };
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b border-border">
      <nav className="flex justify-between mx-auto max-w-7xl h-16 items-center px-6 not-md:px-0 not-sm:flex-col">
        {/* Logo */}
        <a href="#accueil" className="font-mono text-lg not-md:text-base font-bold text-foreground">
          <span className="text-primary">{"<"}</span>
          <span className="text-muted-foreground">{"/"}</span>
          <span className="text-primary">{">"}</span> kcatSlluFveD
        </a>
        {/* Liens - desktop */}
        <ul ref={linkRef} className="flex items-center md:gap-8 gap-3">
          {navLinks.map((link: { label: string; href: string }) => (
            <li key={link.href}>
              <a
                id="nav-links"
                href={link.href}
                className="md:text-sm text-secondary-foreground hover:text-primary transition-colors underline-offset-1 text-xs "
                onClick={(e) => handleUnderline(e)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
