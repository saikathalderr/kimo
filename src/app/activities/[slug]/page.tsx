import { NextPageProps } from '@/app/types';

function ActivityPage({ params }: NextPageProps) {
  const { slug } = params;

  return <p>ActivityPage: {slug}</p>;
}

export default ActivityPage;
