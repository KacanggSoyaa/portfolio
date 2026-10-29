import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, FolderGit2, Layers, User, MessageSquare, Terminal, ExternalLink, Copy, Check, Volume2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { playClick, toggleSound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteAction {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social';
  icon: React.ReactNode;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const actions: PaletteAction[] = [
    {
      id: 'nav-hire',
      title: 'Hire Danis — Send Project Inquiry or Get Quote',
      category: 'Actions',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('contact'),
    },
    {
      id: 'nav-services',
      title: 'View Freelance Services & Client Pricing',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-amber-400" />,
      perform: () => scrollTo('services'),
    },
    {
      id: 'nav-projects',
      title: 'View Featured Projects & Case Studies',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('projects'),
    },
    {
      id: 'nav-about',
      title: 'View About Me, Diploma in IT & Skills',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-blue-400" />,
      perform: () => scrollTo('about'),
    },
    {
      id: 'nav-terminal',
      title: 'Jump to Interactive Terminal Playground',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      perform: () => scrollTo('terminal'),
    },
    {
      id: 'act-copy-email',
      title: `Copy Email Address (${personalInfo.email})`,
      category: 'Actions',
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'act-sound',
      title: 'Toggle Sound Effects & Audio Clicks',
      category: 'Actions',
      icon: <Volume2 className="w-4 h-4 text-purple-400" />,
      perform: () => {
        toggleSound();
        onClose();
      },
    },
    {
      id: 'social-whatsapp',
      title: 'Chat with Danis on WhatsApp (+60123456789)',
      category: 'Social',
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.open('https://wa.me/60123456789', '_blank');
        onClose();
      },
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile (@danisdev)',
      category: 'Social',
      icon: <ExternalLink className="w-4 h-4 text-slate-300" />,
      perform: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        playClick();
        filtered[selectedIndex].perform();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 ring-1 ring-cyan-500/20"
      >
        {/* Search Input */}
        <div className="p-3.5 border-b border-slate-800 flex items-center gap-3 bg-slate-950/80">
          <Search className="w-4 h-4 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, section, or action..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 outline-none"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playClick();
                    item.perform();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer text-xs transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/15 text-white border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-2.5 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; to navigate</span>
            <span>&crarr; to select</span>
          </div>
          <span className="text-cyan-400/90 font-mono">Spotlight Search</span>
        </div>
      </div>
    </div>
  );
};
