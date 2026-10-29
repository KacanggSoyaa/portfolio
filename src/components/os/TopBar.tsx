import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Sparkles, Terminal, Wifi, BatteryCharging } from 'lucide-react';
import { isSoundEnabled, toggleSound, playClick } from '../../utils/sound';

interface TopBarProps {
  onOpenPalette: () => void;
  onHireClick: () => void;
  onOpenApp: (id: any) => void;
  activeAppTitle?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenPalette,
  onHireClick,
  onOpenApp,
  activeAppTitle,
}) => {
  const [time, setTime] = useState<string>('');
  const [soundOn, setSoundOn] = useState<boolean>(true);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playClick();
  };

  return (
    <header className="h-8 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-3 flex items-center justify-between text-xs text-slate-300 select-none z-50 fixed top-0 left-0 right-0">
      {/* Left Menu Items */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Apple/OS Icon */}
        <button
          onClick={() => {
            playClick();
            onOpenApp('about');
          }}
          className="flex items-center gap-1.5 font-bold text-white hover:text-cyan-400 transition-colors"
        >
          <span className="text-cyan-400 font-mono text-sm">&lt;/&gt;</span>
          <span className="hidden sm:inline">DanisOS</span>
        </button>

        {/* Quick App Links */}
        <div className="hidden md:flex items-center space-x-3 text-slate-400">
          <button
            onClick={() => {
              playClick();
              onOpenApp('projects');
            }}
            className="hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => {
              playClick();
              onOpenApp('services');
            }}
            className="hover:text-white transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              playClick();
              onOpenApp('terminal');
            }}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Terminal className="w-3 h-3" /> Terminal
          </button>
        </div>

        {/* Live Freelance Availability Badge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-[10px] text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Available for Freelance</span>
          <span className="sm:hidden">Available</span>
        </div>
      </div>

      {/* Right System Controls */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Command Palette Button */}
        <button
          onClick={() => {
            playClick();
            onOpenPalette();
          }}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 hover:text-white transition-all text-[11px]"
          title="Search or Run Command (Ctrl+K)"
        >
          <Search className="w-3 h-3 text-cyan-400" />
          <span className="hidden sm:inline text-slate-400">Search</span>
          <kbd className="hidden sm:inline px-1 py-0.2 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono text-slate-400">
            Ctrl+K
          </kbd>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={handleSoundToggle}
          className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title={soundOn ? 'Mute System Sounds' : 'Enable System Sounds'}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
        </button>

        {/* System Status Icons */}
        <div className="hidden lg:flex items-center space-x-1.5 text-slate-500">
          <Wifi className="w-3 h-3 text-slate-400" />
          <BatteryCharging className="w-3 h-3 text-emerald-400" />
        </div>

        {/* Time Clock */}
        <div className="font-mono text-xs text-slate-300 px-1">{time || '12:00 PM'}</div>

        {/* Direct Hire CTA */}
        <button
          onClick={() => {
            playClick();
            onHireClick();
          }}
          className="flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-[11px] px-2.5 py-0.5 rounded-md shadow-sm transition-all"
        >
          <Sparkles className="w-3 h-3" /> Hire Me
        </button>
      </div>
    </header>
  );
};
