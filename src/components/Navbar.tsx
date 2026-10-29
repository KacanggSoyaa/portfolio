import React, { useState, useEffect } from 'react';
import { Search, ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface NavbarProps {
  onOpenPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group text-white font-medium text-sm tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 flex items-center justify-center font-mono text-xs font-bold text-cyan-400 transition-colors">
            DN
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-slate-400 font-normal">
              Web Developer &bull; IT Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/70 backdrop-blur border border-slate-800/80 px-4 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Projects</span>
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs"
            title="Search or Quick Jump (Ctrl+K)"
            aria-label="Open Command Palette"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-cyan-500/20"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 bg-cyan-500 text-slate-950 font-semibold text-xs py-2.5 rounded-lg transition-colors"
          >
            Get in Touch &rarr;
          </a>
        </div>
      )}
    </header>
  );
};
