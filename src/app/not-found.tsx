import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 font-mono text-6xl font-bold text-primary">404</h1>
      <p className="mb-8 text-lg text-muted-foreground">Cette page n&apos;existe pas.</p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
