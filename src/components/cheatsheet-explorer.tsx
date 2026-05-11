"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { searchCheatsheets } from "@/lib/search";
import { CheatsheetCard } from "@/components/cheatsheet-card";
import { CATEGORIES, type Category } from "@/lib/categories";
import type { CheatsheetMeta } from "@/lib/cheatsheets";

function getCategoryFromHash(): Category | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.slice(1);
  return hash in CATEGORIES ? (hash as Category) : null;
}

export function CheatsheetExplorer({
  cheatsheets,
}: {
  cheatsheets: CheatsheetMeta[];
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category | null>(null);
  const debouncedQuery = useDebounce(query, 200);

  const syncFromHash = useCallback(() => {
    setActive(getCategoryFromHash());
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const results = useMemo(() => {
    let filtered = cheatsheets;
    if (active) {
      filtered = filtered.filter((cs) => cs.category === active);
    }
    return searchCheatsheets(filtered, debouncedQuery);
  }, [cheatsheets, active, debouncedQuery]);

  return (
    <>
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(
          Object.entries(CATEGORIES) as [
            Category,
            (typeof CATEGORIES)[Category],
          ][]
        ).map(([key, cat]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              const next = active === key ? null : key;
              window.location.hash = next ?? "";
            }}
            className={`rounded-xl border p-4 text-left transition-all hover:border-primary/30 hover:shadow-md ${
              active === key
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-card"
            }`}
          >
            <h3
              className={`flex items-center gap-2 font-mono text-sm font-bold ${
                active === key ? "text-primary" : ""
              }`}
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${cat.color}`} />
              {cat.label}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {cat.description}
            </p>
          </button>
        ))}
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un cheatsheet..."
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {results.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          Aucun cheatsheet trouvé pour &quot;{debouncedQuery}&quot;
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
