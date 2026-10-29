import React, { useState, useRef, useEffect } from 'react';
import { bannerText, handleCommand, type CommandOutput } from '../../data/terminalCommands';
import { playClick } from '../../utils/sound';
import { Terminal, Trash2 } from 'lucide-react';

interface TerminalAppProps {
  onHireClick?: () => void;
  onOpenPalette?: () => void;
  className?: string;
}

interface HistoryItem {
  cmd: string;
  output: CommandOutput;
}

export const TerminalApp: React.FC<TerminalAppProps> = ({
  onHireClick,
  onOpenPalette,
  className = '',
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      cmd: 'neofetch',
      output: handleCommand('neofetch').output,
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>(['neofetch']);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Only scroll the internal terminal container, NOT the window
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    playClick();
    const cleanCmd = cmd.trim();

    if (cleanCmd.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const { output, action } = handleCommand(cleanCmd);
    setHistory((prev) => [...prev, { cmd: cleanCmd, output }]);

    if (cleanCmd) {
      setCmdHistory((prev) => [...prev, cleanCmd]);
      setHistoryIdx(-1);
    }

    // Connect terminal actions to webpage scrolling & modals
    if (action === 'open_projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (action === 'open_services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (action === 'open_contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      onHireClick?.();
    }
    if (action === 'open_palette') {
      onOpenPalette?.();
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['help', 'neofetch', 'about', 'skills', 'projects', 'services', 'hire', 'contact', 'date', 'clear', 'gui'];
      const match = available.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl overflow-hidden flex flex-col font-mono text-xs ${className}`}
    >
      {/* Terminal Title Bar */}
      <div className="h-9 px-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-slate-400 text-[11px] ml-2 flex items-center gap-1.5 font-medium">
            <Terminal className="w-3 h-3 text-cyan-400" /> danis@danis-workspace ~ zsh
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              playClick();
              setHistory([]);
            }}
            title="Clear terminal"
            className="p-1 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div ref={scrollContainerRef} className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[280px] max-h-[420px] select-text">
        <pre className="text-cyan-400 font-mono text-[10px] leading-tight select-none opacity-85">
          {bannerText}
        </pre>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="text-emerald-400">danis@danis-workspace</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-400">$</span>
              <span className="text-white font-semibold">{item.cmd}</span>
            </div>

            <div className="pl-4">
              {item.output.type === 'ascii' && (
                <pre className="text-cyan-300 text-[10px] leading-tight whitespace-pre font-mono">
                  {item.output.content}
                </pre>
              )}

              {item.output.type === 'list' && Array.isArray(item.output.content) && (
                <div className="space-y-1 text-slate-300">
                  {item.output.content.map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              )}

              {item.output.type === 'info' && Array.isArray(item.output.content) && (
                <div className="space-y-1 text-blue-300">
                  {item.output.content.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>
              )}

              {item.output.type === 'success' && (
                <div className="text-emerald-400">
                  {Array.isArray(item.output.content)
                    ? item.output.content.map((line, lIdx) => <div key={lIdx}>{line}</div>)
                    : item.output.content}
                </div>
              )}

              {item.output.type === 'error' && (
                <div className="text-rose-400">{item.output.content}</div>
              )}

              {item.output.type === 'text' && (
                <div className="text-slate-300">{item.output.content}</div>
              )}
            </div>
          </div>
        ))}

        {/* Input Prompt */}
        <div className="flex items-center gap-2 text-cyan-300 pt-1">
          <span className="text-emerald-400">danis@danis-workspace</span>
          <span className="text-slate-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or 'skills'..."
            className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 text-xs font-mono caret-cyan-400 placeholder-slate-600"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};
