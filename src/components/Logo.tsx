import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/#hero" className="font-mono text-lg font-bold text-foreground not-md:text-base">
      <span className="text-primary">{'<'}</span>
      <span className="text-muted-foreground">{'/'}</span>
      <span className="text-primary">{'>'}</span> devfullStack
    </Link>
  );
}
