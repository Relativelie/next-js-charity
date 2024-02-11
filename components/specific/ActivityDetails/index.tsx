import clsx from 'clsx';

import { toFormatDate } from '@/lib/utils/toFormatDate';
import { cursive } from '@/lib/ui/fonts';
import { getActivity } from '@/lib/server/activities/activities';
import { ActivityDetailsType } from '@/app/activities/[activitySlug]/page';

async function ActivityDetails({ params }: ActivityDetailsType) {
  const { name, date, location, purpose, startTime, endTime } = getActivity(
    params.activitySlug
  );

  return (
    <div className="flex flex-col p-2 md:gap-10 md:p-5">
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
}

export default ActivityDetails;
