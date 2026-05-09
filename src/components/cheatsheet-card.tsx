import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';
import type { CheatsheetMeta } from '@/lib/cheatsheets';

export function CheatsheetCard({ cheatsheet }: { cheatsheet: CheatsheetMeta }) {
  const category = CATEGORIES[cheatsheet.category];

  return (
    <Link
      href={`/cheatsheets/${cheatsheet.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-2 flex items-center gap-2">
        <span>{category.icon}</span>
        <span className="text-xs font-medium text-muted-foreground">{category.label}</span>
      </div>

      <h3 className="mb-2 font-mono text-lg font-bold tracking-tight group-hover:text-primary">
        {cheatsheet.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {cheatsheet.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {cheatsheet.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Voir le cheatsheet <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
