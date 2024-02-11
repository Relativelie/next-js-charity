import Image, { StaticImageData } from 'next/image';

import { cursive } from '@/lib/ui/fonts';

type HighlightProps = {
  title: string;
  description: string;
  src: StaticImageData;
};

const Highlight: React.FC<HighlightProps> = ({ title, description, src }) => {
  return (
    <div className="group relative flex h-130 w-40 flex-col justify-end overflow-hidden rounded-b-lg transition-[width] duration-300 hover:w-2/6">
      <div className="absolute md:top-[80%] bg-septenary-opacity p-2 transition-all duration-300 md:group-hover:top-[60%]">
        <div className="w-38 md:h-28 md:py-4 text-center group-hover:h-fit">
          <h3 className={cursive.className}>{title}</h3>
        </div>
        <p>{description}</p>
      </div>

      <Image
        className="z-[-1] rounded-lg object-cover"
        src={src}
        fill
        alt={title}
        sizes='(max-width: 768px) 60vw, (max-width: 1200px) 40vw'
      />
    </div>
  );
};

export default Highlight;
