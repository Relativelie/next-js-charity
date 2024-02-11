import clsx from 'clsx';
import { cursive } from '@/lib/ui/fonts';
import HighlightList from './HighlightList';

const ActivitiesHeader = () => {
  return (
    <div className="lg:grid lg:grid-rows-[4rem_,1fr,_4rem] items-center lg:grid-cols-[25rem,30rem,1fr]">
      <div className="col-span-2 col-start-1 row-span-full h-full w-full bg-primary" />
      <h1
        className={clsx(
          cursive.className,
          'col-start-1 row-start-2 text-center'
        )}
      >
        Join Us for Fun and Friendship
      </h1>
      <HighlightList />
    </div>
  );
};

export default ActivitiesHeader;
