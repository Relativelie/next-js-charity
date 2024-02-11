import { Suspense } from 'react';

import {
  ActivitiesList,
  ActivitiesHeader,
  ActivitiesListHeader,
  ActivitiesSkeleton,
} from '@/components/specific';
import {
  getActivities,
  getActivitiesCount,
} from '@/lib/server/activities/activities';
import { fragmentIds } from '@/lib/utils/fragmentIds';
import { AppPagination } from '@/components/shared';

const limit = 6;

async function Activities({ page }: { page: number }) {
  const res = await getActivities(page, limit);
  const totalItems = getActivitiesCount();

  return (
    <div className="flex flex-col gap-10 py-4">
      <ActivitiesList activities={res} />
      <AppPagination
        itemsPerPage={limit}
        totalItems={totalItems}
        fragmentIdentifier={fragmentIds.activities.list}
      />
    </div>
  );
}

type ActivitiesPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default function ActivitiesPage({ searchParams }: ActivitiesPageProps) {
  const currentPage = Number(searchParams['page']) || 1;

  return (
    <>
      <header>
        <ActivitiesHeader />
        <ActivitiesListHeader />
      </header>

      <main>
        <Suspense
          key={currentPage}
          fallback={<ActivitiesSkeleton limit={limit} />}
        >
          <Activities page={currentPage} />
        </Suspense>
      </main>
    </>
  );
}
