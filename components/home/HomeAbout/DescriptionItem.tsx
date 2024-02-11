import { cursive } from '@/lib/ui/fonts';
import Image, { StaticImageData } from 'next/image';

type DescriptionItemProps = {
  title: string;
  content: string;
  imageSrc: StaticImageData;
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  title,
  content,
  imageSrc,
}) => {
  return (
    <div className="grid grid-rows-[8rem,1fr]">
      <div className="flex w-full justify-center">
        <Image
          src={imageSrc}
          alt={title}
          height={0}
          width={0}
          className="self-center w-28 h-auto"
        />
      </div>

      <div className="flex flex-col items-center gap-5">
        <h3 className={cursive.className}>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DescriptionItem;
