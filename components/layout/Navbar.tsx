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
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Close on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Move focus to first menu item when menu opens
  useEffect(() => {
    if (menuOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus(); // return focus to trigger
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const isCurrentRoute = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    },
    [pathname]
  );

  return (
    <nav
      className="sticky top-0 z-50 bg-background-secondary border-b border-base h-16"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-6 md:px-20 h-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Logo width={40} height={40} className="w-10 h-10" />
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

        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          {/* Mobile Toggle */}
          <button
            ref={menuButtonRef}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className="md:hidden ml-2 text-muted hover:text-foreground transition rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="md:hidden absolute w-full right-0 bg-background border-b border-base z-50"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {NAV_LINKS.map((link, index) => (
                <NavItem
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  active={isCurrentRoute(link.href)}
                  onClick={() => setMenuOpen(false)}
                  ref={index === 0 ? firstMenuItemRef : undefined}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
