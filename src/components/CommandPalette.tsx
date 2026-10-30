import React, { useState } from 'react';
import { Search, Sparkles, FolderGit2, Layers, User, Briefcase, ExternalLink, Copy, Check, MessageSquare, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { whatsappUrl } from '../utils/contact';
import { copyText } from '../utils/clipboard';
import { useCommandPalette, type PaletteItem } from '../hooks/useCommandPalette';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteAction extends PaletteItem {
  icon: React.ReactNode;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

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
      id: 'nav-os',
      title: 'Open Interactive OS Portfolio',
      category: 'Navigation',
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        window.location.href = '/os';
      },
    },
    {
      id: 'act-copy-email',
      title: `Copy Email Address (${personalInfo.email})`,
      category: 'Actions',
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        void copyText(personalInfo.email).then((ok) => {
          if (!ok) return;
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      },
    },
    {
      id: 'social-whatsapp',
      title: `Message on WhatsApp (${personalInfo.whatsapp})`,
      category: 'Social',
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.open(whatsappUrl(), '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'social-github',
      title: 'Visit GitHub Profile',
      category: 'Social',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      perform: () => {
        window.open(personalInfo.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'social-linkedin',
      title: 'Connect on LinkedIn',
      category: 'Social',
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      perform: () => {
        window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const {
    query,
    setQuery,
    selectedIndex,
    setSelectedIndex,
    filtered,
    inputRef,
    dialogRef,
    handleKeyDown,
    select,
  } = useCommandPalette({ isOpen, onClose, items: actions });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800">
          <Search className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-results"
            aria-label="Search commands"
            aria-activedescendant={
              filtered[selectedIndex] ? `palette-option-${filtered[selectedIndex].id}` : undefined
            }
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div id="palette-results" role="listbox" aria-label="Commands" className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((action, idx) => (
              <button
                key={action.id}
                id={`palette-option-${action.id}`}
                role="option"
                aria-selected={idx === selectedIndex}
                onClick={() => select(action)}
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
