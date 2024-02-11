import clsx from 'clsx';

import { Activity } from '@/lib/server/activities/models';
import { toFormatDate } from '@/lib/utils/toFormatDate';
import { cursive } from '@/lib/ui/fonts';

type ActivityDetailsProps = {
  activity: Activity;
};

const ActivityDetails: React.FC<ActivityDetailsProps> = ({ activity }) => {
  const { name, date, location, purpose, startTime, endTime } = activity;

  return (
    <div className="flex flex-col md:gap-10 p-2 md:p-5">
      <h1 className={clsx(cursive.className, 'text-center')}>
        {name.toUpperCase()}
      </h1>

      <h3 className={clsx(cursive.className)}>Location: {location}</h3>

      <div>
        <h3 className={clsx(cursive.className)}>Description</h3>
        <p>{purpose}</p>
      </div>

      <div>
        <h3 className={clsx(cursive.className)}>Date and Time</h3>
        <p>{toFormatDate(date)}</p>
        <p>
          {startTime} - {endTime}
        </p>
      </div>
    </div>
  );
};

export default ActivityDetails;
