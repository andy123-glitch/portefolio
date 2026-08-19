import { Mail, MapPin, Phone } from 'lucide-react';
import { navLinks } from '../datas/navData';
import Button from '../components/Button';
import { socials } from '../datas/socialsData';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinksStyle = 'mt-1 block text-sm text-muted-foreground hover:text-primary';
  return (
    <footer className="border-t border-border py-6 px-5">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-[2fr_auto]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="text-sm text-muted-foreground ">
            Développeur web full stack passionné par la création de solutions digitales innovantes.
          </p>
          <div className="flex gap-2">
            {socials.map((social) => (
              <Button
                key={'fs-' + social.name}
                variant="icon"
                size="icon"
                {...social.attributs}
                aria-label={social.ariaLabel}
              >
                <social.icon />
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4 px-4 flex flex-row gap-4 justify-around not-md:flex-wrap md:gap-10">
          <div>
            <h3 className="text-base font-semibold">Navigation</h3>
            {navLinks.map((link) => (
              <Link key={'fl-' + link.label} to={link.href} className={footerLinksStyle}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-base font-semibold ">Ressources</h3>
            <a className={footerLinksStyle} href="/Andy_Azerot_CV.pdf" target="_blank">
              Voir mon CV (PDF)
            </a>
          </div>
          <div>
            <h3 className="text-base font-semibold">Contact</h3>
            <a className={footerLinksStyle} href="mailto:andy.azerot@gmail.com">
              <Mail className="inline-block mr-1.5" size={16} />
              andy.azerot@gmail.com
            </a>
            <p className={footerLinksStyle}>
              <Phone className="inline-block mr-1.5" size={16} /> +33 6 31 25 50 55
            </p>
            <p className={footerLinksStyle}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Limoges+France"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="inline-block mr-1.5" size={16} />
                Limoges, France
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-12 border-t border-border pt-4">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Andy Azerot. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
