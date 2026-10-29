import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';

export interface PaletteItem {
  id: string;
  title: string;
  category: string;
  perform: () => void;
}

interface UseCommandPaletteOptions<T extends PaletteItem> {
  isOpen: boolean;
  onClose: () => void;
  items: T[];
  onActivate?: (item: T) => void;
}

export const useCommandPalette = <T extends PaletteItem>({
  isOpen,
  onClose,
  items,
  onActivate,
}: UseCommandPaletteOptions<T>) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setQuery('');
    setSelectedIndex(0);
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 50);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleGlobalKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const select = (item: T) => {
    onActivate?.(item);
    item.perform();
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[selectedIndex];
      if (item) select(item);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return {
    query,
    setQuery,
    selectedIndex,
    setSelectedIndex,
    filtered,
    inputRef,
    dialogRef,
    handleKeyDown,
    select,
  };
};
