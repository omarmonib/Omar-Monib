import Link from 'next/link';
import { memo, forwardRef } from 'react';

type NavItemProps = {
  href: string;
  name: string;
  active: boolean;
  onClick?: () => void;
};

const baseLinkClass =
  'transition-all duration-200 font-bold hover:text-accent px-3 py-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';
const activeClass = 'bg-accent/10 text-accent';
const inactiveClass = 'text-foreground hover:bg-accent/5';

export default memo(
  forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem(
    { href, name, active, onClick },
    ref
  ) {
    return (
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        className={`${baseLinkClass} ${active ? activeClass : inactiveClass}`}
      >
        {name}
      </Link>
    );
  })
);
