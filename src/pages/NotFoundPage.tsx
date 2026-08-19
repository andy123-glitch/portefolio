import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-2 text-sm font-semibold tracking-widest text-primary">ERREUR 404</p>
      <h1 className="mb-4 text-3xl font-bold">Cette page n’existe pas.</h1>
      <Link to="/" className="w-fit font-semibold text-primary hover:text-foreground">
        Retourner à l’accueil
      </Link>
    </main>
  );
}
