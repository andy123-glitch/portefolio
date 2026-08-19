import Logo from '../components/Logo.tsx';
import { navLinks } from '../datas/navData.ts';
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
  const location = useLocation();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border backdrop-blur-md">
      <nav className="mx-auto container flex h-16  items-center justify-between px-6 not-sm:flex-col not-md:px-0">
        <Logo />
        <ul className="flex items-center gap-3 md:gap-8">
          {navLinks.map((link: { label: string; href: string }) => (
            <li key={'hl-' + link.href}>
              <Link
                to={link.href}
                className="text-xs text-secondary-foreground underline-offset-1 transition-colors hover:text-primary md:text-sm"
                aria-current={location.pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
