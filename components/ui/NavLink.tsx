import Link from 'next/link';
import { memo } from 'react';

type NavItemProps = {
  href: string;
  name: string;
  active: boolean;
  onClick?: () => void;
};

const baseLinkClass =
  'transition-all duration-200 font-bold hover:text-accent px-3 py-1 rounded-full';
const activeClass = 'bg-accent/10 text-accent';
const inactiveClass = 'text-foreground hover:bg-accent/5';

export default memo(function NavItem({ href, name, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`${baseLinkClass} ${active ? activeClass : inactiveClass}`}
    >
      {name}
    </Link>
  );
});
