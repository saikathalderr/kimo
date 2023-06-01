import Hero from '@/components/hero';
import Highlights from '@/components/highlights';
import Categories from '@/components/categories';
import TravelGuide from '@/components/travelGuide';

import { getHighlights } from '@/controllers/highlights';
import { getCategories } from '@/controllers/categories';

export default async function Home() {
  const highlightsData = getHighlights();
  const categoriesData = getCategories();

  const [highlights, categories] = await Promise.all([
    highlightsData,
    categoriesData,
  ]);

  return (
    <main>
      <Hero />
      <div className="bg-white">
        <div className="mx-auto my-0 px-[16px] md:w-[80vw] md:max-w-[1300px] md:px-0">
          <Highlights highlights={highlights} />
        </div>
      </div>
      <div>
        <div className="mx-auto my-0 grid px-[16px] md:w-[80vw] md:max-w-[1300px] md:grid-cols-1 md:gap-0 md:px-0 lg:grid-cols-2 lg:gap-8">
          <Categories categories={categories} />
          <TravelGuide />
        </div>
      </div>
    </main>
  );
}
