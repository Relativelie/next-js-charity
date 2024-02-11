import Image from 'next/image';
import AbstractYellowImage from '@/public/abstract-yellow.png';

const HeaderBackground = () => {
  return (
    <>
      <div className="col-span-10 col-start-7 row-span-full bg-primary" />
      <Image
        className="z-10 col-span-10 col-start-3 row-start-2"
        src={AbstractYellowImage}
        width={830}
        alt="Yellow abstract"
      />
    </>
  );
};

export default HeaderBackground;
