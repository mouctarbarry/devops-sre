export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://mouctar.fr"
          className="font-mono transition-colors hover:text-foreground"
        >
          mouctar.fr
        </a>
        <span className="text-border">|</span>
        <a
          href="https://linux.mouctar.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono transition-colors hover:text-foreground"
        >
          linux.mouctar.fr
        </a>
        <span className="text-border">|</span>
        <a
          href="https://devops.mouctar.fr"
          className="font-mono transition-colors hover:text-foreground"
        >
          devops.mouctar.fr
        </a>
        <span className="text-border">|</span>
        <a
          href="https://snake.mouctar.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono transition-colors hover:text-foreground"
        >
          snake.mouctar.fr
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mouctar Barry</p>
    </footer>
  );
}
