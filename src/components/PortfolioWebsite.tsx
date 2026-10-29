import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ServicesSection } from './ServicesSection';
import { ProjectsSection } from './ProjectsSection';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { CommandPalette } from './CommandPalette';

export const PortfolioWebsite: React.FC = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('High-Converting Landing Pages');

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Background Cyber Mesh Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero onOpenPalette={() => setPaletteOpen(true)} />
        <ServicesSection onSelectService={handleSelectService} />
        <ProjectsSection />
        <AboutSection />
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Command Palette Spotlight Search */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
};
