import Image from 'next/image';

import MainImage from '@/public/girls-flowers.jpg';
import ThumbtackImage from '@/public/thumbtack.png';
import HeaderText from './HeaderText';
import HeaderBackground from './HeaderBackground';

const HomeHeader = () => {
  return (
    <header className="grid h-140 grid-cols-5 grid-rows-5 md:grid-cols-12 md:grid-rows-12">
      <HeaderBackground />
      <HeaderText />
      <div className="relative col-start-1 col-span-4 row-span-4 md:col-start-6 row-start-2 md:h-96 w-96">
        <Image
          src={MainImage}
          alt="Happy teens"
          fill
          className="z-10 object-cover"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 45vw"
        />
        <Image
          className="absolute right-0 top-0 z-20"
          src={ThumbtackImage}
          height={50}
          alt="Thumbtack"
          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw"
        />
      </div>
    </header>
  );
};

export default HomeHeader;
