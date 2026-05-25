'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Logo from '@/components/ui/Logo';
import { NAV_LINKS } from '@/constants/links';
import { SOCIAL_LINKS } from '@/constants/contact';

const iconMap: Record<string, React.ElementType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline + availability */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity"
            >
              <Logo width={32} height={32} className="w-8 h-8" />
              <span className="text-lg font-bold text-foreground">Omar Monib</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Frontend Developer & Network Engineer building high-performance web applications.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              Available for opportunities
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground mb-1">Navigation</h4>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground mb-1">Connect</h4>
            {[...SOCIAL_LINKS].map((link) => {
              const Icon = iconMap[link.icon] || FiGithub;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors w-fit"
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Omar Monib. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-accent font-medium">Next.js</span>
            {' & '}
            <span className="text-accent font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
