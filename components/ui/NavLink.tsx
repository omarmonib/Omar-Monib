import Link from 'next/link';
import { memo } from 'react';
type NavItemProps = {
  href: string;
  name: string;
  active: boolean;
  onClick?: () => void;
};

const baseLinkClass = 'transition font-bold hover:text-blue-500';
const activeClass = 'text-accent underline';

export default memo(function NavItem({ href, name, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`${baseLinkClass} ${active ? activeClass : ''}`}
    >
      {name}
    </Link>
  );
});
