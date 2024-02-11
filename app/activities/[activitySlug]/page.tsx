import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

import { getActivity } from '@/lib/server/activities/activities';
import ActivityImage from '@/public/activity-details-bg.jpg';
import { ActivityDetails } from '@/components/specific';
import { AppContactUsContainer } from '@/components/shared';

export type ActivityDetailsType = {
  params: { activitySlug: string };
};

export async function generateMetadata(
  { params }: ActivityDetailsType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const activity = getActivity(params.activitySlug);

  return {
    title: activity.name,
  };
}

export default function ActivityDetailsPage({ params }: ActivityDetailsType) {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center">
      <Image
        src={ActivityImage}
        alt="Activity background"
        fill
        className="z-[-1] object-cover brightness-50"
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 45vw"
      />

      <div className="flex flex-col justify-between rounded-lg bg-senary/90 md:h-2/3 md:w-2/3">
        <ActivityDetails params={params} />

        <AppContactUsContainer />
      </div>
    </main>
  );
}
