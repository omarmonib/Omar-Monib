'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import ThemeSwitcher from './ThemeSwitcher';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/constants/links';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

  return (
    <nav
      role="navigation"
      className="fixed top-0 left-0 w-full h-16 z-50 
      bg-white/80 dark:bg-black/40 backdrop-blur-md
      border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="flex items-center justify-between px-6 md:px-20 h-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold">Omar</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`transition duration-200 hover:text-blue-500 
                  ${active ? 'text-blue-500 underline' : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <ThemeSwitcher />

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          className="md:hidden ml-4 text-gray-700 dark:text-gray-300"
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
            aria-hidden={!menuOpen}
            className="md:hidden bg-white/95 dark:bg-black/80 
            backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {NAV_LINKS.map((link) => {
                const active = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg transition hover:text-blue-500
                      ${active ? 'text-blue-500 underline' : 'text-gray-700 dark:text-gray-300'}
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
