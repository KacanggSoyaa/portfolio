import React from 'react';
import type { AppId } from '../../types';
import { User, FolderGit2, Layers, MessageSquare, Terminal, FileText } from 'lucide-react';
import { playClick, playWindowOpen } from '../../utils/sound';

interface DesktopIconProps {
  id: AppId;
  label: string;
  isOpen: boolean;
  onOpen: (id: AppId) => void;
}

const iconMap: Record<AppId, React.ReactNode> = {
  about: <User className="w-6 h-6 text-white" />,
  projects: <FolderGit2 className="w-6 h-6 text-white" />,
  services: <Layers className="w-6 h-6 text-white" />,
  contact: <MessageSquare className="w-6 h-6 text-white" />,
  terminal: <Terminal className="w-6 h-6 text-white" />,
  resume: <FileText className="w-6 h-6 text-white" />,
};

const colorMap: Record<AppId, string> = {
  about: 'from-blue-600 to-indigo-600',
  projects: 'from-cyan-600 to-teal-600',
  services: 'from-amber-600 to-orange-600',
  contact: 'from-emerald-600 to-teal-600',
  terminal: 'from-slate-800 to-slate-900 border border-slate-700',
  resume: 'from-rose-600 to-pink-600',
};

export const DesktopIcon: React.FC<DesktopIconProps> = ({ id, label, isOpen, onOpen }) => {
  const handleClick = () => {
    if (!isOpen) {
      playWindowOpen();
    } else {
      playClick();
    }
    onOpen(id);
  };

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/10 active:bg-white/15 transition-all text-center focus:outline-none focus:ring-1 focus:ring-cyan-400/50 w-20 sm:w-24 select-none"
    >
      <div
        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${colorMap[id]} flex items-center justify-center shadow-lg group-hover:scale-105 group-active:scale-95 transition-transform duration-200`}
      >
        {iconMap[id]}
      </div>
      <span className="mt-1.5 text-xs text-slate-200 font-medium tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:text-white line-clamp-1">
        {label}
      </span>
    </button>
  );
};
