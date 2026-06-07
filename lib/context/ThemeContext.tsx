'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

function getInitialTheme(): 'light' | 'dark' {
  // Server: always return 'light' so SSR HTML matches
  if (typeof window === 'undefined') return 'light';
  // Client: read what the blocking script already set on <html>
  // This runs once during hydration — no setState, no double render
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'dark' ? 'dark' : 'light';
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    // Only syncs external systems (DOM + localStorage) — no setState here
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
