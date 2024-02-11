import { Activity } from '@/lib/server/activities/models';
import ActivityCard from './ActivityCard';

type ActivitiesListProps = {
  activities: Activity[];
};

const ActivitiesList: React.FC<ActivitiesListProps> = ({ activities }) => {
  return (
    <div className="flex justify-center">
      <ul className="grid md:w-2/3 grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] grid-rows-2 gap-5">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} item={activity} />
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesList;
