'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { CATEGORIES, type Category } from '@/lib/categories';

const NAV_ITEMS = [
  { label: 'Accueil', href: '/', key: 'home' as const },
  ...Object.entries(CATEGORIES).map(([key, cat]) => ({
    label: cat.label,
    href: `/#${key}`,
    key: key as Category,
    color: cat.color,
  })),
];

function NavLink({
  item,
  active,
  onClick,
}: {
  item: (typeof NAV_ITEMS)[number];
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      {...(onClick ? { onClick } : {})}
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
      }`}
    >
      {'color' in item && item.color ? (
        <span className={`h-2 w-2 shrink-0 rounded-full ${item.color}`} />
      ) : null}
      {item.label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link href="/" className="font-heading text-lg font-bold tracking-tight">
            DevOps & SRE
          </Link>
        </div>
        <ThemeToggle />
      </div>

      {open && (
        <div
          className="fixed inset-0 top-14 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className="absolute bottom-0 left-0 top-0 w-64 overflow-y-auto border-r border-border bg-background p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileNavContent onClose={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavContent({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.key}
          item={item}
          active={item.href === '/' ? pathname === '/' : false}
          onClick={onClose}
        />
      ))}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border p-4 lg:block">
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            item={item}
            active={item.href === '/' ? pathname === '/' : false}
          />
        ))}
      </nav>
    </aside>
  );
}
