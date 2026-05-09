'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { searchCheatsheets } from '@/lib/search';
import { CheatsheetCard } from '@/components/cheatsheet-card';
import type { CheatsheetMeta } from '@/lib/cheatsheets';

export function SearchBar({ cheatsheets }: { cheatsheets: CheatsheetMeta[] }) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200);

  const results = useMemo(
    () => searchCheatsheets(cheatsheets, debouncedQuery),
    [cheatsheets, debouncedQuery],
  );

  return (
    <>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Rechercher un cheatsheet..."
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {results.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          Aucun cheatsheet trouve pour &quot;{debouncedQuery}&quot;
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((cs) => (
            <CheatsheetCard key={cs.slug} cheatsheet={cs} />
          ))}
        </div>
      )}
    </>
  );
}
