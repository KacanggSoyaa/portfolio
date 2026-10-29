import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, FolderGit2, Layers, User, Briefcase, ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

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

  const cleanWaNumber = personalInfo.whatsapp.replace(/\D/g, '');

  const actions: PaletteAction[] = [
    {
      id: 'nav-contact',
      title: 'Get in Touch — Request Quote or Consultation',
      category: 'Actions',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('contact'),
    },
    {
      id: 'nav-projects',
      title: 'View Selected Work & Case Studies',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-slate-300" />,
      perform: () => scrollTo('projects'),
    },
    {
      id: 'nav-services',
      title: 'View Web Services & Deliverables',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-slate-300" />,
      perform: () => scrollTo('services'),
    },
    {
      id: 'nav-about',
      title: 'View About Danis & Technical Stack',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-slate-300" />,
      perform: () => scrollTo('about'),
    },
    {
      id: 'nav-experience',
      title: 'View Experience & IT Diploma Credentials',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-slate-300" />,
      perform: () => scrollTo('experience'),
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
      id: 'social-whatsapp',
      title: `Message on WhatsApp (${personalInfo.whatsapp})`,
      category: 'Social',
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.open(`https://wa.me/${cleanWaNumber}`, '_blank');
        onClose();
      },
    },
    {
      id: 'social-github',
      title: 'Visit GitHub Profile',
      category: 'Social',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      perform: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      },
    },
    {
      id: 'social-linkedin',
      title: 'Connect on LinkedIn',
      category: 'Social',
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      perform: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].perform();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800">
          <Search className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((action, idx) => (
              <button
                key={action.id}
                onClick={() => action.perform()}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-colors ${
                  idx === selectedIndex
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    {action.icon}
                  </div>
                  <span className="font-medium">{action.title}</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {action.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>&uarr;&darr; Navigate</span>
            <span>&bull;</span>
            <span>&crarr; Select</span>
          </div>
          <span>Danis Nazri &bull; Portfolio</span>
        </div>
      </div>
    </div>
  );
};
