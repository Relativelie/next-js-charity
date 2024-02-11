'use client';

import { cursive } from '@/lib/ui/fonts';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();
  const className = path === href ? 'text-primary' : '';
  return (
    <Link
      href={href}
      className={clsx(
        className,
        cursive.className,
        'cursor-pointer md:p-2 text-lg md:text-2xl'
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
