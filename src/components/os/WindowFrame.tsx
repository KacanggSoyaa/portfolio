import React, { useState, useRef, useEffect } from 'react';
import type { WindowState } from '../../types';
import { Minus, Square, X, Copy } from 'lucide-react';
import { playClick, playWindowClose } from '../../utils/sound';

interface WindowFrameProps {
  windowState: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  windowState,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}) => {
  const [pos, setPos] = useState(windowState.position);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update initial pos when windowState changes
  useEffect(() => {
    if (!windowState.isMaximized && !isMobile) {
      setPos(windowState.position);
    }
  }, [windowState.position, windowState.isMaximized, isMobile]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (windowState.isMaximized || isMobile) return;
    onFocus();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || windowState.isMaximized || isMobile) return;
    const newX = Math.max(10, Math.min(window.innerWidth - 100, e.clientX - dragStart.x));
    const newY = Math.max(32, Math.min(window.innerHeight - 80, e.clientY - dragStart.y));
    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  if (!windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  // Mobile layout: full screen sheet
  if (isMobile) {
    return (
      <div
        ref={windowRef}
        onPointerDown={onFocus}
        style={{ zIndex: windowState.zIndex }}
        className="fixed inset-0 top-8 bottom-16 bg-slate-900 border-t border-slate-700/80 shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Title Bar */}
        <div className="h-10 px-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-200">{windowState.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playClick();
                onMinimize();
              }}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                playWindowClose();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-red-950/80 text-red-400 hover:bg-red-900"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    );
  }

  // Desktop floating or maximized layout
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  return (
    <div
      ref={windowRef}
      onPointerDown={onFocus}
      style={{
        zIndex: windowState.zIndex,
        ...(windowState.isMaximized
          ? {
              top: '32px',
              left: '0px',
              width: '100vw',
              height: 'calc(100vh - 32px - 68px)',
            }
          : {
              top: `${pos.y}px`,
              left: `${pos.x}px`,
              width: `${Math.min(windowState.size.width, viewportWidth - 40)}px`,
              height: `${Math.min(windowState.size.height, viewportHeight - 120)}px`,
            }),
      }}
      className={`fixed flex flex-col rounded-xl overflow-hidden bg-slate-900/90 backdrop-blur-xl border border-slate-700/70 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-[box-shadow,border-color] duration-150 ${
        isDragging ? 'select-none opacity-95 scale-[1.002]' : ''
      }`}
    >
      {/* Window Header / Title Bar */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDoubleClick={onMaximize}
        className="h-9 px-3.5 bg-gradient-to-r from-slate-900/90 via-slate-850 to-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0 cursor-grab active:cursor-grabbing select-none"
      >
        {/* macOS Traffic Lights */}
        <div className="flex items-center space-x-2 group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              playWindowClose();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-rose-500/90 hover:bg-rose-600 flex items-center justify-center text-[8px] text-slate-950 transition-colors shadow-sm"
            title="Close"
          >
            <X className="w-2 h-2 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              playClick();
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-amber-500/90 hover:bg-amber-600 flex items-center justify-center text-[8px] text-slate-950 transition-colors shadow-sm"
            title="Minimize"
          >
            <Minus className="w-2 h-2 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              playClick();
              onMaximize();
            }}
            className="w-3 h-3 rounded-full bg-emerald-500/90 hover:bg-emerald-600 flex items-center justify-center text-[8px] text-slate-950 transition-colors shadow-sm"
            title={windowState.isMaximized ? 'Restore' : 'Maximize'}
          >
            {windowState.isMaximized ? (
              <Copy className="w-2 h-2 opacity-0 group-hover:opacity-100" />
            ) : (
              <Square className="w-2 h-2 opacity-0 group-hover:opacity-100" />
            )}
          </button>
        </div>

        {/* Title */}
        <div className="text-xs font-medium text-slate-300 flex items-center gap-1.5 pointer-events-none">
          <span>{windowState.title}</span>
        </div>

        {/* Right dummy spacer for visual balance */}
        <div className="w-12 text-right">
          <span className="text-[10px] text-slate-500 font-mono">DanisOS</span>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-hidden relative">{children}</div>
    </div>
  );
};
