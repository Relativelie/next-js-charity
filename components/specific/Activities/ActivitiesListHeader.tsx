import clsx from 'clsx';

import { cursive } from '@/lib/ui/fonts';
import { fragmentIds } from '@/lib/utils/fragmentIds';

const ActivitiesListHeader = () => {
  return (
    <div
      id={fragmentIds.activities.list}
      className="mb-10 flex flex-col items-center gap-5 bg-tertiary py-10"
    >
      <h2 className={clsx(cursive.className, 'w-2/3 text-center')}>
        Explore our diverse range of activities designed to cater to every
        interest and age group
      </h2>
    </div>
  );
};

export default ActivitiesListHeader;
