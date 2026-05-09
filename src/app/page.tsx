import { getCheatsheets } from "@/lib/cheatsheets";
import { CheatsheetExplorer } from "@/components/cheatsheet-explorer";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const cheatsheets = getCheatsheets();

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-bold tracking-tight">DevOps & SRE</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Concepts, philosophie et cheatsheets pratiques — de Kubernetes à
            Terraform, tout ce qu&apos;il faut pour le DevOps au quotidien.
          </p>
          <p className="mt-3 font-mono text-sm text-muted-foreground">
            {cheatsheets.length} cheatsheets
          </p>
        </header>

        <section>
          <CheatsheetExplorer cheatsheets={cheatsheets} />
        </section>
      </main>

      <Footer />
    </>
  );
}
