import { getActivity } from '@/lib/server/activities/activities';
import Image from 'next/image';
import ActivityImage from '@/public/activity-details-bg.jpg';
import { ActivityDetails, AppContactUsContainer } from '@/components';
import { Metadata, ResolvingMetadata } from 'next';

type ActivityDetailsProps = {
  params: { [key: string]: string };
};

export async function generateMetadata(
  { params }: ActivityDetailsProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const activity = getActivity(params.activitySlug);

  return {
    title: activity.name,
  };
}

export default function ActivityDetailsPage({ params }: ActivityDetailsProps) {
  const activity = getActivity(params.activitySlug);

  return (
    <main className="relative flex h-screen flex-col items-center justify-center">
      <Image
        src={ActivityImage}
        alt="Activity background"
        fill
        className="z-[-1] object-cover brightness-50"
        sizes='(max-width: 768px) 70vw, (max-width: 1200px) 45vw'
      />

      <div className="flex md:h-2/3 md:w-2/3 flex-col justify-between rounded-lg bg-senary/90">
        <ActivityDetails activity={activity} />
        <AppContactUsContainer />
      </div>
    </main>
  );
}
