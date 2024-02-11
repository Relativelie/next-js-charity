import Image from 'next/image';

import ActiveImage from '@/public/active-kids.jpg';
import JudoImage from '@/public/judo-kids.jpg';

type InfoBackgroundProps = {
  children: React.ReactNode;
};

const InfoBackground: React.FC<InfoBackgroundProps> = ({ children }) => {
  return (
    <section className="relative grid h-130 grid-cols-[1fr,_1fr,_2fr] grid-rows-3">
      <Image
        src={ActiveImage}
        alt="Active kids"
        fill
        className="z-10 col-start-1 col-end-2 row-start-1 object-cover"
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 45vw"
      />
      <Image
        src={JudoImage}
        alt="Judo kids"
        fill
        className="col-start-2 row-start-1 object-cover"
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 85vw"
      />
      {children}
    </section>
  );
};

export default InfoBackground;
