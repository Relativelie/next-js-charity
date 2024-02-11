import { cursive } from '@/lib/ui/fonts';
import clsx from 'clsx';
import Link from 'next/link';

const TITLE = 'Something interesting';
const DESCRIPTION = 'will be here soon';

type CardProps = {
  title?: string;
  description?: string;
  href?: string;
};

const GetStartedCard: React.FC<CardProps> = ({
  title = TITLE,
  description = DESCRIPTION,
  href,
}) => {
  return (
    <Link
      href={href || '/'}
      className={clsx(
        !href ? 'pointer-events-none' : '',
        'rounded-lg border-2 border-primary/50 bg-secondary/35 p-4 duration-300 hover:bg-primary/60'
      )}
    >
      <h3 className={cursive.className}>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default GetStartedCard;
