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
        <div className="mx-auto my-0 flex flex-col px-[16px] md:w-[80vw] md:max-w-[1300px] md:flex-col md:px-0 lg:flex-row lg:gap-[32px]">
          <Catergories />
          <TravelGuide />
        </div>
      </div>
    </main>
  );
}
