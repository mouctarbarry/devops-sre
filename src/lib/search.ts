import type { CheatsheetMeta } from "./cheatsheets";

export function searchCheatsheets(
  cheatsheets: CheatsheetMeta[],
  query: string,
): CheatsheetMeta[] {
  const q = query.toLowerCase().trim();
  if (!q) return cheatsheets;

  return cheatsheets.filter(
    (cs) =>
      cs.title.toLowerCase().includes(q) ||
      cs.description.toLowerCase().includes(q) ||
      cs.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}
