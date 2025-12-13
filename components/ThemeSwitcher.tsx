'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-12 h-12 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      <Sun
        className={`absolute w-6 h-6 transition-all duration-300 ${
          currentTheme === 'light'
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-0'
        }`}
      />
      <Moon
        className={`absolute w-6 h-6 transition-all duration-300 ${
          currentTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
        }`}
      />
    </button>
  );
}
