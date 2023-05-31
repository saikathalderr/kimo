import Hero from '@/components/hero';
import Highlights from '@/components/highlights';
import Catergories from '@/components/catergories';
import TravelGuide from '@/components/travelGuide';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <div className="mx-auto my-0 px-[16px] md:w-[80vw] md:max-w-[1300px] md:px-0">
          <Highlights />
        </div>
      </div>
      <div>
        <div className="mx-auto my-0 grid px-[16px] md:w-[80vw] md:max-w-[1300px] md:grid-cols-1 md:gap-0 md:px-0 lg:grid-cols-2 lg:gap-8">
          <Catergories />
          <TravelGuide />
        </div>
      </div>
    </main>
  );
}
