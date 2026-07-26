import { Mail, MapPin, Phone } from 'lucide-react';
import { navLinks } from '../datas/navData';
import Button from '../components/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  const footerLinksStyle =
    'mt-1 first-of-type:mt-2  block text-sm text-muted-foreground hover:text-primary';
  return (
    <footer className="border-t border-border py-6 px-5">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-[2fr_auto]">
        <div className="flex flex-col gap-5">
          <a
            href="#accueil"
            className="font-mono text-lg font-bold text-foreground not-md:text-base"
          >
            <span className="text-primary">{'<'}</span>
            <span className="text-muted-foreground">{'/'}</span>
            <span className="text-primary">{'>'}</span> kcatSlluFveD
          </a>
          <p className="text-sm text-muted-foreground ">
            Développeur web fullstack passionné par la création de solutions digitales innovantes.
          </p>
          <div className="flex gap-2">
            <Button variant="icon" size="icon">
              <FaGithub />
            </Button>
            <Button variant="icon" size="icon">
              <FaLinkedin />
            </Button>
            <Button variant="icon" size="icon">
              <Mail />
            </Button>
          </div>
        </div>
        <div className="mt-4 px-4 flex flex-row gap-4 justify-around not-md:flex-wrap md:gap-10">
          <div className="">
            <h4 className="text-base font-semibold">Navigation</h4>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={footerLinksStyle}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="">
            <h4 className="text-base font-semibold ">Ressouces</h4>
            <a className={footerLinksStyle} href="/cv.pdf" download>
              CV
            </a>
          </div>
          <div className="">
            <h4 className="text-base font-semibold">Contact</h4>
            <a className={footerLinksStyle} href="mailto:andy.azerot@gmail.com">
              <Mail className="inline-block mr-1.5" size={16} />
              andy.azerot@gmail.com
            </a>
            <p className={footerLinksStyle}>
              <Phone className="inline-block mr-1.5" size={16} /> +33 6 31 25 50 55
            </p>
            <p className={footerLinksStyle}>
              <MapPin className="inline-block mr-1.5" size={16} /> Limoges, France
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-12 border-t border-border pt-4">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevFullstack. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
