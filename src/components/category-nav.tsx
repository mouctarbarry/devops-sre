'use client';

import Link from 'next/link';
import { CATEGORIES, type Category } from '@/lib/categories';

export function CategoryNav() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {(Object.entries(CATEGORIES) as [Category, (typeof CATEGORIES)[Category]][]).map(
        ([key, cat]) => (
          <Link
            key={key}
            href={`#${key}`}
            className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="mb-2 text-2xl">{cat.icon}</div>
            <h3 className="font-mono text-sm font-bold group-hover:text-primary">{cat.label}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{cat.description}</p>
          </Link>
        ),
      )}
    </div>
  );
}
