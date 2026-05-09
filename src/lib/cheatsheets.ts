import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Category } from './categories';

export interface CheatsheetMeta {
  slug: string;
  title: string;
  category: Category;
  description: string;
  tags: string[];
}

export interface Cheatsheet extends CheatsheetMeta {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'src/content/cheatsheets');

export function getCheatsheets(): CheatsheetMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));

  return files
    .map((filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title as string,
        category: data.category as Category,
        description: data.description as string,
        tags: data.tags as string[],
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getCheatsheetBySlug(slug: string): Cheatsheet | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    category: data.category as Category,
    description: data.description as string,
    tags: data.tags as string[],
    content,
  };
}

export function getCheatsheetsByCategory(category: Category): CheatsheetMeta[] {
  return getCheatsheets().filter((cs) => cs.category === category);
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
