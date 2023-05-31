import { NextPageProps } from '@/app/types';

function CategoryPage({ params }: NextPageProps) {
  const { slug } = params;

  return <p>CategoryPage: {slug}</p>;
}

export default CategoryPage;
