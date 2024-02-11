import Image, { StaticImageData } from 'next/image';

type AppAnchorLinkProps = {
  link: string;
  title?: string;
  imageSrc?: StaticImageData;
  imgAlt?: string;
};

const AnchorLink: React.FC<AppAnchorLinkProps> = ({
  link,
  title,
  imageSrc,
  imgAlt,
}) => {
  return (
    <a target="_blank" className="underline" href={link} rel="noreferrer">
      {title}
      {imageSrc && imgAlt && (
        <Image
          className="h-8 w-8 rounded-full border-2 grayscale filter hover:filter-none md:h-16 md:w-16"
          src={imageSrc}
          alt={imgAlt}
        />
      )}
    </a>
  );
};

export default AnchorLink;
