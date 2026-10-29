import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Sparkles, Terminal, Menu, X } from 'lucide-react';
import { isSoundEnabled, toggleSound, playClick } from '../utils/sound';

interface NavbarProps {
  onOpenPalette: () => void;
  onOpenTerminalModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPalette, onOpenTerminalModal }) => {
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playClick();
  };

  const navLinks = [
    { label: 'Terminal', href: '#terminal' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => playClick()}
          className="flex items-center gap-2 group text-white font-bold text-base sm:text-lg tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-mono text-sm font-extrabold group-hover:scale-105 transition-transform shadow-md shadow-cyan-500/20">
            &lt;D/&gt;
          </div>
          <span className="font-mono">Danis<span className="text-cyan-400">.dev</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 bg-slate-900/60 backdrop-blur border border-slate-800/80 px-4 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => playClick()}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Live Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-[11px] text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Hire</span>
          </div>

          {/* Search / Command Palette Shortcut */}
          <button
            onClick={() => {
              playClick();
              onOpenPalette();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all text-xs"
            title="Search or Quick Jump (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title={soundOn ? 'Mute Sound FX' : 'Enable Sound FX'}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            onClick={() => playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" /> Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              playClick();
              setMobileMenuOpen(false);
            }}
            className="block text-center mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs py-2.5 rounded-lg"
          >
            Hire Me &rarr;
          </a>
        </div>
      )}
    </nav>
  );
};
