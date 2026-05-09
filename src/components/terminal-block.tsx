'use client';

import { Check, Copy } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

interface TerminalBlockProps {
  command: string;
  output?: string;
}

export function TerminalBlock({ command, output }: TerminalBlockProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border border-border bg-terminal-bg font-mono text-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <button
          onClick={() => void copy(command)}
          className="rounded p-1 text-terminal-comment transition-colors hover:text-terminal-text"
          aria-label="Copier la commande"
        >
          {copied ? <Check className="h-4 w-4 text-terminal-green" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="px-4 py-3">
        <div className="flex">
          <span className="mr-2 select-none text-terminal-prompt">$</span>
          <span className="text-terminal-text">{command}</span>
        </div>
        {output ? (
          <pre className="mt-2 whitespace-pre-wrap text-terminal-comment">{output}</pre>
        ) : null}
      </div>
    </div>
  );
}
