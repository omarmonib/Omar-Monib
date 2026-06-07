'use client';

import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSyncExternalStore } from 'react';

// useSyncExternalStore with identical server and client snapshots
// until hydration is complete — then returns true on client only.
// Zero setState, zero useEffect, zero lint errors.
function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {}, // subscribe: no external store, never changes
    () => true, // getSnapshot (client): mounted
    () => false // getServerSnapshot: not mounted
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return <div className="w-8 h-8" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="text-foreground hover:scale-110 transition-transform w-8 h-8 flex items-center justify-center"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
