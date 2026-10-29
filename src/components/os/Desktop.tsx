import React, { useState, useEffect } from 'react';
import type { AppId, WindowState } from '../../types';
import { Wallpaper } from './Wallpaper';
import { TopBar } from './TopBar';
import { Dock } from './Dock';
import { DesktopIcon } from './DesktopIcon';
import { WindowFrame } from './WindowFrame';
import { CommandPalette } from './CommandPalette';

import { AboutApp } from '../apps/AboutApp';
import { ProjectsApp } from '../apps/ProjectsApp';
import { ServicesApp } from '../apps/ServicesApp';
import { ContactApp } from '../apps/ContactApp';
import { TerminalApp } from '../apps/TerminalApp';
import { ResumeApp } from '../apps/ResumeApp';
import { playWindowOpen } from '../../utils/sound';

export const Desktop: React.FC = () => {
  const [topZ, setTopZ] = useState(10);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Initial window registry
  const [windows, setWindows] = useState<Record<AppId, WindowState>>({
    about: {
      id: 'about',
      title: 'About Me — Danis (IT Diploma & Freelancer)',
      icon: 'User',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 70, y: 55 },
      size: { width: 840, height: 560 },
    },
    projects: {
      id: 'projects',
      title: 'Projects & Work — Case Studies & Live Demos',
      icon: 'FolderGit2',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
      position: { x: 120, y: 70 },
      size: { width: 920, height: 620 },
    },
    services: {
      id: 'services',
      title: 'Freelance Services & Client Pricing',
      icon: 'Layers',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 8,
      position: { x: 160, y: 80 },
      size: { width: 880, height: 600 },
    },
    contact: {
      id: 'contact',
      title: 'Hire Me / Project Inquiry Form',
      icon: 'MessageSquare',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 7,
      position: { x: 200, y: 90 },
      size: { width: 820, height: 580 },
    },
    terminal: {
      id: 'terminal',
      title: 'Terminal — danis@danis-workspace (ZSH)',
      icon: 'Terminal',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 6,
      position: { x: 140, y: 110 },
      size: { width: 720, height: 480 },
    },
    resume: {
      id: 'resume',
      title: 'Curriculum Vitae — Danis (Resume 2026)',
      icon: 'FileText',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 5,
      position: { x: 180, y: 65 },
      size: { width: 800, height: 600 },
    },
  });

  // Global keyboard shortcut: Ctrl+K / Cmd+K
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

  const bringToFront = (id: AppId) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: {
          ...w[id],
          zIndex: nextZ,
          isMinimized: false,
        },
      }));
      return nextZ;
    });
  };

  const openApp = (id: AppId) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: {
          ...w[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      }));
      return nextZ;
    });
  };

  const closeApp = (id: AppId) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        isOpen: false,
      },
    }));
  };

  const minimizeApp = (id: AppId) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        isMinimized: true,
      },
    }));
  };

  const maximizeApp = (id: AppId) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        isMaximized: !w[id].isMaximized,
      },
    }));
  };

  const handleDockClick = (id: AppId) => {
    const target = windows[id];
    if (!target.isOpen) {
      openApp(id);
    } else if (target.isMinimized) {
      bringToFront(id);
    } else {
      // Toggle minimize if already active at front
      minimizeApp(id);
    }
  };

  const handleHireClick = () => {
    playWindowOpen();
    openApp('contact');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 select-none">
      {/* Background Wallpaper */}
      <Wallpaper />

      {/* Top Menu Bar */}
      <TopBar
        onOpenPalette={() => setPaletteOpen(true)}
        onHireClick={handleHireClick}
        onOpenApp={openApp}
      />

      {/* Desktop Canvas & Desktop Shortcuts Grid */}
      <div className="absolute top-10 left-3 sm:left-6 flex flex-col gap-4 z-10">
        <DesktopIcon
          id="about"
          label="About.app"
          isOpen={windows.about.isOpen && !windows.about.isMinimized}
          onOpen={openApp}
        />
        <DesktopIcon
          id="projects"
          label="Projects.app"
          isOpen={windows.projects.isOpen && !windows.projects.isMinimized}
          onOpen={openApp}
        />
        <DesktopIcon
          id="services"
          label="Services.app"
          isOpen={windows.services.isOpen && !windows.services.isMinimized}
          onOpen={openApp}
        />
        <DesktopIcon
          id="contact"
          label="Contact.app"
          isOpen={windows.contact.isOpen && !windows.contact.isMinimized}
          onOpen={openApp}
        />
        <DesktopIcon
          id="terminal"
          label="Terminal.app"
          isOpen={windows.terminal.isOpen && !windows.terminal.isMinimized}
          onOpen={openApp}
        />
        <DesktopIcon
          id="resume"
          label="Resume.pdf"
          isOpen={windows.resume.isOpen && !windows.resume.isMinimized}
          onOpen={openApp}
        />
      </div>

      {/* Quick Desktop Intro Watermark / Hint */}
      <div className="absolute right-6 bottom-20 hidden md:block text-right pointer-events-none z-0">
        <div className="text-3xl font-extrabold text-white/10 tracking-tight font-mono">DANIS // OS</div>
        <div className="text-xs text-white/20 mt-1 font-mono">
          Press <kbd className="border border-white/20 px-1 py-0.5 rounded text-[10px]">Ctrl+K</kbd> for Command Palette
        </div>
      </div>

      {/* Window Manager Layer */}
      <WindowFrame
        windowState={windows.about}
        onClose={() => closeApp('about')}
        onMinimize={() => minimizeApp('about')}
        onMaximize={() => maximizeApp('about')}
        onFocus={() => bringToFront('about')}
      >
        <AboutApp
          onHireClick={handleHireClick}
          onOpenResume={() => openApp('resume')}
        />
      </WindowFrame>

      <WindowFrame
        windowState={windows.projects}
        onClose={() => closeApp('projects')}
        onMinimize={() => minimizeApp('projects')}
        onMaximize={() => maximizeApp('projects')}
        onFocus={() => bringToFront('projects')}
      >
        <ProjectsApp onHireClick={handleHireClick} />
      </WindowFrame>

      <WindowFrame
        windowState={windows.services}
        onClose={() => closeApp('services')}
        onMinimize={() => minimizeApp('services')}
        onMaximize={() => maximizeApp('services')}
        onFocus={() => bringToFront('services')}
      >
        <ServicesApp onHireClick={handleHireClick} />
      </WindowFrame>

      <WindowFrame
        windowState={windows.contact}
        onClose={() => closeApp('contact')}
        onMinimize={() => minimizeApp('contact')}
        onMaximize={() => maximizeApp('contact')}
        onFocus={() => bringToFront('contact')}
      >
        <ContactApp />
      </WindowFrame>

      <WindowFrame
        windowState={windows.terminal}
        onClose={() => closeApp('terminal')}
        onMinimize={() => minimizeApp('terminal')}
        onMaximize={() => maximizeApp('terminal')}
        onFocus={() => bringToFront('terminal')}
      >
        <TerminalApp
          onOpenProjects={() => openApp('projects')}
          onOpenServices={() => openApp('services')}
          onHireClick={handleHireClick}
          onOpenPalette={() => setPaletteOpen(true)}
        />
      </WindowFrame>

      <WindowFrame
        windowState={windows.resume}
        onClose={() => closeApp('resume')}
        onMinimize={() => minimizeApp('resume')}
        onMaximize={() => maximizeApp('resume')}
        onFocus={() => bringToFront('resume')}
      >
        <ResumeApp />
      </WindowFrame>

      {/* Floating System Dock */}
      <Dock
        windows={windows}
        onAppClick={handleDockClick}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onOpenApp={openApp}
        onHireClick={handleHireClick}
      />
    </div>
  );
};
