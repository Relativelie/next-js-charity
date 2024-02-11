import { Activity } from '@/lib/server/activities/models';
import db from '@/lib/server/db';

export async function getActivities(
  page: number,
  limit: number
): Promise<Activity[]> {
  // made this func async to simulate a slow network to examine the load state
  await new Promise((resolve) => setTimeout(resolve, 1900));
  return db
    .prepare('SELECT * FROM activities LIMIT ? OFFSET ?')
    .all(limit, limit * (page - 1)) as Activity[];
}

export function getActivitiesCount(): number {
  const res = db.prepare('SELECT COUNT(*) count FROM activities').get() as {
    count: number;
  };
  return res.count;
}

export function getActivity(slug: string): Activity {
  return db
    .prepare('SELECT * FROM activities WHERE slug = ?')
    .get(slug) as Activity;
}
