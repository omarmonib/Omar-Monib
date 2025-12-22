'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NavItem from '@/components/ui/NavLink';
import ThemeSwitcher from '@/components/ui/ThemeToggle';
import Logo from '@/components/ui/Logo';
import { NAV_LINKS } from '@/constants/links';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const isCurrentRoute = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    },
    [pathname]
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-base">
      <div className="flex items-center justify-between px-6 md:px-20 h-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold text-foreground">Omar</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.name}
              href={link.href}
              name={link.name}
              active={isCurrentRoute(link.href)}
            />
          ))}
        </div>

        <ThemeSwitcher />

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          className="md:hidden ml-4 text-muted hover:text-foreground transition"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="
          md:hidden absolute w-full right-0
          bg-background-secondary/95 backdrop-blur
          border-b border-base
        "
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  active={isCurrentRoute(link.href)}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
