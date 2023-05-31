import Hero from '@/components/hero';
import Highlights from '@/components/highlights';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <div className="mx-auto my-0 px-[16px] md:w-[80vw] md:max-w-[1300px] md:px-0">
          <Highlights />
        </div>
      </div>
    </main>
  );
}
