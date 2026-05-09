import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllSlugs, getCheatsheetBySlug } from "@/lib/cheatsheets";
import { CATEGORIES } from "@/lib/categories";
import { TerminalBlock } from "@/components/terminal-block";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cheatsheet = getCheatsheetBySlug(slug);
  if (!cheatsheet) return {};
  return {
    title: `${cheatsheet.title} — DevOps & SRE`,
    description: cheatsheet.description,
  };
}

const mdxComponents = {
  TerminalBlock,
};

export default async function CheatsheetPage({ params }: PageProps) {
  const { slug } = await params;
  const cheatsheet = getCheatsheetBySlug(slug);
  if (!cheatsheet) notFound();

  const category = CATEGORIES[cheatsheet.category];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-12">
        <nav className="mb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Tous les cheatsheets
          </Link>
        </nav>

        <header className="mb-8">
          <span className="mb-2 inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {category.label}
          </span>
          <h1 className="mb-2 font-mono text-4xl font-bold">
            {cheatsheet.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {cheatsheet.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {cheatsheet.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote
            source={cheatsheet.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "one-dark-pro",
                      keepBackground: true,
                    },
                  ],
                ],
              },
            }}
          />
        </article>
      </main>

      <Footer />
    </>
  );
}
