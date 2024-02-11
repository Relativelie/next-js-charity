import clsx from 'clsx';
import AppFilledButton from '../../AppFilledButton';
import { cursive } from '@/lib/ui/fonts';
import Link from 'next/link';
import { fragmentIds } from '@/lib/utils/fragmentIds';

const HeaderText = () => {
  return (
    <div className="z-20 col-span-full  col-start-1 row-start-9 flex flex-col items-end justify-between p-4 md:col-span-3 md:col-start-4">
      <div>
        <h2 className={clsx(cursive.className, 'text-right')}>Welcome to</h2>
        <h1 className="text-black">EmpowerKids Zone</h1>
      </div>
      <div className="flex flex-col items-end gap-5">
        <h5 className="text-black">
          Supporting Children, Building Friendships
        </h5>
        <Link href={`#${fragmentIds.home.getStarted}`}>
          <AppFilledButton title="Explore" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderText;
