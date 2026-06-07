'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { NAV_LINKS } from '@/constants/links';

export default function RouteAnnouncer() {
  const pathname = usePathname();
  const announcerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const match = NAV_LINKS.find((link) =>
      link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
    );
    const pageName = match?.name ?? 'Page';

    if (announcerRef.current) {
      announcerRef.current.textContent = '';
      // Small delay so screen readers register the change
      setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = `Navigated to ${pageName}`;
        }
      }, 100);
    }
  }, [pathname]);

  return <p ref={announcerRef} aria-live="polite" aria-atomic="true" className="sr-only" />;
}
