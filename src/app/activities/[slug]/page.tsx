import { NextPageProps } from '@/app/types';
import Hero from '@/components/hero';
import { getActivity } from '@/controllers/activities';
import { Activity } from '@/controllers/types';

async function ActivityPage({ params }: NextPageProps) {
  const { slug } = params;

  const activityData = getActivity({
    activityType: decodeURIComponent(slug),
  });

  const [activity] = await Promise.all([activityData]);

  const { image } = activity as Activity;

  return (
    <div>
      <Hero title={decodeURIComponent(slug)} image={image} />
    </div>
  );
}

export default ActivityPage;
