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

  const { image, description } = activity as Activity;

  return (
    <div>
      <Hero title={decodeURIComponent(slug)} image={image} />
      <div className="bg-white">
        <div className="mx-auto my-0 px-[16px] md:w-[80vw] md:max-w-[1300px] md:px-0">
          <div className="py-10">
            <p className="py-5 pt-0 font-bold text-dark">Description</p>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
