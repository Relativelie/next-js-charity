import Image from 'next/image';

import png from '@/public/png7.png';
import Title from './Title';
import GetStartedCard from './GetStartedCard';

const AppGetStarted = () => {
  return (
    <div className="relative flex md:h-140 flex-col justify-center">
      <div className="md:m-20 flex flex-col items-center gap-20">
        <Title />

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <GetStartedCard
            title="Activities"
            description="Explore activities and events designed to support bullying prevention
          and intervention."
            href="/activities"
          />
          <GetStartedCard
            title="Get in Touch"
            description="Have something on your mind? We`re all ears!"
            href="/contact"
          />
          <GetStartedCard />
          <GetStartedCard />
        </div>
      </div>
      <Image
        src={png}
        alt="Circled background"
        fill
        className="z-[-1] object-cover opacity-85"
      />
    </div>
  );
};

export default AppGetStarted;
