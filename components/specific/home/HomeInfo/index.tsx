import clsx from 'clsx';

import InfoBackground from './InfoBackground';
import { cursive } from '@/lib/ui/fonts';

const HomeInfo = () => {
  return (
    <InfoBackground>
      <div className="z-20 col-span-full row-span-full md:m-16 flex flex-col items-center justify-center bg-septenary-opacity">
        <div className="flex md:w-2/3 flex-col gap-5">
          <h2 className={clsx(cursive.className, 'text-center')}>
            Join Us in Making a Difference
          </h2>
          <h4 className={cursive.className}>
            Whether you`re a parent, educator, or a child seeking support, we
            invite you to be a part of our community. Together, we can make a
            positive impact and create a world where every child feels heard,
            supported, and connected.
          </h4>
        </div>
      </div>
    </InfoBackground>
  );
};

export default HomeInfo;
