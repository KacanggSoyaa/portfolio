import React from 'react';
import type { WindowState, AppId } from '../../types';
import { User, FolderGit2, Layers, MessageSquare, Terminal, FileText, Search } from 'lucide-react';
import { playClick, playWindowOpen } from '../../utils/sound';

interface DockProps {
  windows: Record<AppId, WindowState>;
  onAppClick: (id: AppId) => void;
  onOpenPalette: () => void;
}

interface DockItem {
  id: AppId | 'palette';
  label: string;
  icon: React.ReactNode;
  color: string;
}

export const Dock: React.FC<DockProps> = ({ windows, onAppClick, onOpenPalette }) => {
  const dockItems: DockItem[] = [
    {
      id: 'about',
      label: 'About Danis',
      icon: <User className="w-5 h-5 text-white" />,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'projects',
      label: 'Projects & Work',
      icon: <FolderGit2 className="w-5 h-5 text-white" />,
      color: 'from-cyan-600 to-teal-600',
    },
    {
      id: 'services',
      label: 'Freelance Services',
      icon: <Layers className="w-5 h-5 text-white" />,
      color: 'from-amber-600 to-orange-600',
    },
    {
      id: 'contact',
      label: 'Hire Me / Contact',
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      color: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'terminal',
      label: 'Terminal CLI',
      icon: <Terminal className="w-5 h-5 text-white" />,
      color: 'from-slate-800 to-slate-900 border border-slate-700',
    },
    {
      id: 'resume',
      label: 'Resume PDF',
      icon: <FileText className="w-5 h-5 text-white" />,
      color: 'from-rose-600 to-pink-600',
    },
    {
      id: 'palette',
      label: 'Spotlight Search (Ctrl+K)',
      icon: <Search className="w-5 h-5 text-white" />,
      color: 'from-purple-600 to-violet-600',
    },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="flex items-center gap-1.5 sm:gap-2.5 px-3 py-2 bg-slate-950/75 backdrop-blur-2xl border border-slate-700/60 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {dockItems.map((item) => {
          const isApp = item.id !== 'palette';
          const window = isApp ? windows[item.id as AppId] : null;
          const isOpen = window?.isOpen;
          const isMinimized = window?.isMinimized;

          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'palette') {
                  playClick();
                  onOpenPalette();
                } else {
                  if (!isOpen || isMinimized) {
                    playWindowOpen();
                  } else {
                    playClick();
                  }
                  onAppClick(item.id as AppId);
                }
              }}
              className="group relative flex flex-col items-center focus:outline-none"
            >
              {/* Tooltip */}
              <div className="absolute -top-9 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-slate-200 text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                {item.label}
              </div>

              {/* Icon Container with hover zoom */}
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-md transition-all duration-200 group-hover:-translate-y-1.5 group-hover:scale-110 group-active:scale-95`}
              >
                {item.icon}
              </div>

              {/* Active Indicator Dot */}
              <div className="h-1 mt-1 flex items-center justify-center">
                {isOpen && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isMinimized ? 'bg-slate-500' : 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]'
                    }`}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
