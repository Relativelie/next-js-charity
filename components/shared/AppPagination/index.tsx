'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type AppPaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  fragmentIdentifier?: string;
};

const AppPagination: React.FC<AppPaginationProps> = ({
  itemsPerPage,
  totalItems,
  fragmentIdentifier,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}${fragmentIdentifier ? `#${fragmentIdentifier}` : ''}`;
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center gap-4">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              className={clsx(
                'flex h-8 w-8 items-center justify-center rounded-full',
                number === currentPage ? 'bg-primary' : 'bg-tertiary'
              )}
              href={createPageURL(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppPagination;
