import clsx from 'clsx';

import { cursive } from '@/lib/ui/fonts';
import HeartImage from '@/public/heart.png';
import BicycleImage from '@/public/bicycle.png';
import FriendsImage from '@/public/friends.png';
import DescriptionItem from './DescriptionItem';

const HomeAbout = () => {
  return (
    <section className="grid h-140 grid-cols-12 grid-rows-12">
      <div className="col-span-7 col-start-1 row-span-full bg-secondary" />
      <div className="col-span-full col-start-2 col-end-[-2] row-start-3 flex flex-col gap-20">
        <h2 className={clsx(cursive.className, 'text-center')}>
          How We Can Help
        </h2>
        <div className="md:grid md:grid-cols-3 gap-24">
          <DescriptionItem
            title="Make Friends"
            content="Discover new friendships awaiting you in our vibrant camp community."
            imageSrc={FriendsImage}
          />
          <DescriptionItem
            title="Explore Activities"
            content="Check out our calendar of events, camps, and workshops tailored for children. Engage in fun and enriching experiences that promote personal development and connection."
            imageSrc={BicycleImage}
          />
          <DescriptionItem
            title="Find Support"
            content="Discover resources and information to help children cope with bullying. We provide helplines, counseling services, and tips on dealing with difficult situations."
            imageSrc={HeartImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
