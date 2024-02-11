import { Activity } from '@/lib/server/activities/models';
import { cursive } from '@/lib/ui/fonts';
import { toFormatDate } from '@/lib/utils/toFormatDate';
import Image from 'next/image';
import AbstractYellowImage from '@/public/abstract-yellow.png';
import Link from 'next/link';

type ActivityProps = {
  item: Activity;
};

const ActivityCard: React.FC<ActivityProps> = ({ item }) => {
  return (
    <li className="h-full rounded-lg bg-tertiary-opacity p-5 transition-all duration-300 hover:bg-secondary">
      <Link
        className="relative flex h-full cursor-pointer flex-col justify-between gap-5 "
        href={`/activities/${item.slug}`}
      >
        <h2 className={cursive.className}>{item.name}</h2>
        <div>
          <p>Day: {toFormatDate(item.date)}</p>
          <p>Start Time: {item.startTime}</p>
          <p>End Time: {item.endTime}</p>
        </div>
        <Image
          className="z-[-1] col-span-10 col-start-3 row-start-2"
          src={AbstractYellowImage}
          fill
          alt="Painted abstract yellow background"
          sizes='(max-width: 768px) 70vw, (max-width: 1200px) 45vw'
        />
      </Link>
    </li>
  );
};

export default ActivityCard;
