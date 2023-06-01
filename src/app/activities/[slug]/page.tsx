import { NextPageProps } from '@/app/types';
import Hero from '@/components/hero';
import { getActivity } from '@/controllers/activities';
import { Activity } from '@/controllers/types';
import Head from 'next/head';

export const metadata = {
  title: '',
  description: '',
};

async function ActivityPage({ params }: NextPageProps) {
  const { slug } = params;

  const activityData = getActivity({
    activityType: decodeURIComponent(slug),
  });

  const [activity] = await Promise.all([activityData]);

  const { image, description, activities } = activity as Activity;
  metadata.title = `${decodeURIComponent(slug)} | ${description}`;

  const decodeSlug = decodeURIComponent(slug);

  return (
    <div>
      <Head>
        <title>
          {decodeSlug} | {description}
        </title>
      </Head>
      <Hero
        title={
          <>
            {decodeSlug.split('-').map((word, idx) => (
              <span key={idx + 1 + 'word'}>
                {word} <br />
              </span>
            ))}
          </>
        }
        image={image}
      />
      <div className="bg-white">
        <div className="mx-auto my-0 px-[16px] md:w-[80vw] md:max-w-[1300px] md:px-0">
          <div className="py-10">
            <p className="py-5 pt-0 font-bold text-dark">Description</p>
            {description}
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="mx-auto my-0 px-[16px] md:w-[80vw] md:max-w-[1300px] md:px-0">
          <div className="py-20">
            <p className="py-5 pt-0 font-bold text-dark">Activities</p>
            <ul>
              {activities.map((activity, idx) => (
                <li key={idx + 1 + 'activity-item'} className="p-2">
                  🏝️ {activity.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
